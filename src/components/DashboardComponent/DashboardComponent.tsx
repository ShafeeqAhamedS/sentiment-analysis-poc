// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button"


// const DashboardComponent = () => {
//   return (
//     <div className="flex justify-center items-center">
      
//       <AlertDialog>
//         <AlertDialogTrigger><Button>Open</Button></AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//             <AlertDialogDescription>
//               This action cannot be undone. This will permanently delete your
//               account and remove your data from our servers.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction>Continue</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
    
//   );
// };

// export default DashboardComponent;

import { Component as EmotionLineChart } from "@/components/EmotionLineChart/EmotionLineChart";

const DashboardComponent = () => {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <EmotionLineChart />
    </div>
  );
};

export default DashboardComponent;
