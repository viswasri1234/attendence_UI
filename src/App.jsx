import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AttendenceCorrection from "./Components/AttendenceCorrection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnomolyReassigned from "./Components/AnomolyReassigned";
import Home from "./Components/Home";
import ReassignedStats from "./Components/ReassignedStats";
import IndividualExamCentreStats from "./Components/IndividualExamCentreStats";
import PartAReassigned from "./Components/PartAReassigned";
import PartACorrection from "./Components/PartACorrection";
import Verification from "./Components/Verification";
import Statistics from "./Components/Statistics";
import AnomolyAttendencePage from "./Components/AnomolyAttendencePage";
import AttendenceAdditionalRecord from "./Components/AttendenceAdditionalRecord";
import AttendenceAdditionalRecordCorrection from "./Components/AttendenceAdditionalRecordCorrection";
import AttendanceAdditionalSheet from "./Components/AttendanceAdditionalSheet";
import QueryExecutor from "./Components/QueryExecutor";
import RecordEditor from "./Components/RecordEditor";
import VerifyMarks from "./Components/VerifyMarks";
import QueryCardEditor from "./Components/QueryCardEditor";
import AnomolyPartC from "./Components/AnomolyPartC";
import BarcodeScanner from "./Components/BarcodeScanner";
import EvQrcode from "./Components/EvQrcode";
import QrcodeCardEditor from "./Components/QrCodeCardEditor";
import StudentResultsData from "./Components/StudentsResultsData";
import PlayGrounds from "./Components/PlayGrounds";
import PlayGround from "./Components/PlayGround";
import Revaluation from "./Components/Revaluation";
import PlayGroundUpdated from "./Components/PlaygroundUpdated";
import DummyDuplicates from "./Components/DummyDuplicates";
import IndividualStudAttendence from "./Components/IndividualStudAttendence";
import PendingAttendenceCorrection from "./Components/PendingAttendenceCorrection";
import QrcodeFinder from "./Components/QrcodeFinder";
import IndividualMarksheetGen from "./Components/IndividualMarksheetGen";
import UploadMarksheetDataContainer from "./Components/UploadMarksheetDataContainer";
import DataInsertion from "./Components/DataInsertion";
import DataInsertionCsvViewer from "./Components/DataInsertionCsvViewer";
import Login from "./Components/Login";
import HomeSections from "./Components/HomeSections";
import CertificateTextVerification from "./Components/CertificateTextVerification";
import AttendenceNotShadedCorrection from "./Components/AttendenceNotShadedCorrection";
import Templates from "./Components/Templates";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
           path="/" element={<Home />}></Route>
          <Route
           path="/sections/:year/sqlPlayground"
           element={<QueryExecutor />}
          ></Route>
          <Route
            path="/sections/:year/data/insertion"
            element={<DataInsertion />}
          ></Route>
          <Route path="/sections/:year" element={<HomeSections />}></Route>
          <Route
            path="/sections/:year/data/insertion/validation"
            element={<DataInsertionCsvViewer />}
          ></Route>
          <Route
            path="/sections/:year/certificate/gen"
            element={<IndividualMarksheetGen />}
          ></Route>
          <Route
            path="/sections/:year/certificate/gen/upload"
            element={<UploadMarksheetDataContainer />}
          ></Route>
          <Route
            path="/sections/:year/sqlPlayground/edit"
            element={<QueryCardEditor />}
          ></Route>
          <Route
            path="/sections/:year/evQrcode/edit"
            element={<QrcodeCardEditor />}
          ></Route>
          <Route
            path="/sections/:year/studentsDetails"
            element={<StudentResultsData />}
          ></Route>
          <Route
            path="/sections/:year/Playgrounds"
            element={<PlayGrounds />}
          ></Route>
          <Route
            path="/sections/:year/Playground/:type"
            element={<PlayGround />}
          ></Route>
          <Route
            path="/sections/:year/revaluation"
            element={<Revaluation />}
          ></Route>
          <Route
            path="/sections/:year/playground/updated/:type"
            element={<PlayGroundUpdated />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/attendence/reassigned"
            element={<AnomolyReassigned />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/attendence/pending_stud_check"
            element={<PendingAttendenceCorrection />}
          />
          <Route
            path="/sections/:year/DummyDuplicates/:type"
            element={<DummyDuplicates />}
          ></Route>
          <Route
            path="/sections/:year/sqlPlayground/Editor"
            element={<RecordEditor />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/attendence/stud_check"
            element={<IndividualStudAttendence />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/attendence/additionalSheet"
            element={<AttendanceAdditionalSheet />}
          ></Route>
          <Route
            path="/sections/:year/barcodeScanner"
            element={<BarcodeScanner />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/reassigned/booklet"
            element={<AttendenceCorrection />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/reassigned/stats"
            element={<ReassignedStats />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/attendence"
            element={<AnomolyAttendencePage />}
          ></Route>
          <Route
            path="/sections/:year/qrcodeFinder"
            element={<QrcodeFinder />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/attendence/additionalRecord"
            element={<AttendenceAdditionalRecord />}
          />
          <Route
            path="/sections/:year/AttendenceNotShadedCorrection"
            element={<AttendenceNotShadedCorrection />}
          />
          <Route
            path="/sections/:year/anomoly/attendence/additionalRecord/correction"
            element={<AttendenceAdditionalRecordCorrection />}
          />
          <Route
            path="/sections/:year/anomoly/reassigned/stats/:exam_centre_code"
            element={<IndividualExamCentreStats />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/PartA"
            element={<PartAReassigned />}
          ></Route>
          <Route
            path="/sections/:year/CertificateTextVerification"
            element={<CertificateTextVerification />}
          ></Route>
          <Route
            path="/verification"
            element={<Verification/>}
          ></Route>
          <Route
            path="/sections/:year/statistics"
            element={<Statistics />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/partA/booklet"
            element={<PartACorrection />}
          ></Route>
          <Route
            path="/sections/:year/anomoly/partC"
            element={<AnomolyPartC />}
          ></Route>
          <Route 
          path="/sections/:year/evQrcode" 
          element={<EvQrcode />}
          ></Route>
         <Route 
            path="/sections/:year/Templates" 
            element={<Templatesimage />}
        ></Route>
        </Routes>
      </BrowserRouter>
    </>
  }
}

export default App;
