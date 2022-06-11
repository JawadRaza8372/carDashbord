import React from "react";
import { useSelector } from "react-redux";
import EmployeCard from "../../Components/EmployeCard/EmployeCard";
import "./UserScreen.scss";
import ButtonsDiv from "../../Components/ButtonsDiv/ButtonsDiv";
import DataUnavl from "../Data Unavilble/DataUnavl";
import { useLoadingWithRefreash } from "../../CustomHooks/LoadingData";
import { apiurl } from "../../App";
import axios from "axios";
import CustomerTableData from "../../Components/CustomerTableData/CustomerTableData";
import * as XLSX from "xlsx";
function UserScreen() {
	const { employs } = useSelector((state) => state.project);
	const { setisLoading } = useLoadingWithRefreash();
	const exportmysheet = () => {
		var wb = XLSX.utils.book_new();
		var ws = XLSX.utils.json_to_sheet(employs);
		XLSX.utils.book_append_sheet(wb, ws, "Myfirstsheet");
		XLSX.writeFile(wb, "EmployData.xlsx");
	};
	return (
		<>
			{employs.length > 0 ? (
				<div className='myUserdiv'>
					<div className='exportdiv'>
						<h1 className='tableheading'>Employes</h1>
						<button onClick={exportmysheet}>Export</button>
					</div>
					<table>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>CNIC</th>
							<th>Actions</th>
						</tr>
						{employs.map((dat) => {
							if (dat.Name && dat.Email) {
								return (
									<CustomerTableData
										key={dat._id}
										id={dat._id}
										name={dat.Name}
										email={dat.Email}
										number={dat.Number}
										identityNumbr={dat.IdentityNumbr}
									/>
								);
							} else {
								return null;
							}
						})}
					</table>
				</div>
			) : (
				<DataUnavl />
			)}
		</>
	);
}

export default UserScreen;
