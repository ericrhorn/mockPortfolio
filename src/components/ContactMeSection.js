// import React, {useEffect} from "react";
// import { useFormik } from "formik";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Textarea,
//   VStack,
// } from "@chakra-ui/react";
// import * as Yup from 'yup';
// import FullScreenSection from "./FullScreenSection";
// import useSubmit from "../hooks/useSubmit";
// import {useAlertContext} from "../context/alertContext";

// const LandingSection = () => {
//   const {isLoading, response, submit} = useSubmit();
//   const { onOpen } = useAlertContext();

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       email: "",
//       type: "",
//       comment: ""
//     },
//     onSubmit: (values) => {
//       submit("/", values)
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required('A first name is required'),
//       email: Yup.string().email('Please enter a valid email').required("An email is required"),
//       type: Yup.string().optional(),
//       comment: Yup.string().required().min(25,'Comment must be at least 25 characters'),
//     }),
//     resetForm: (values) => {

//     }
//   });

//   useEffect(() => {
//     if (response){
//       onOpen(response.type, response.message);
//     if (response.type === 'success') {
//       formik.resetForm()
//       }
//     }
//   },[response]);

//   return (
//     <FullScreenSection
//       isDarkBackground
//       backgroundColor="#512DA8"
//       py={16}
//       spacing={8}
//     >
//       <VStack w="1024px" p={32} alignItems="flex-start">
//         <Heading as="h1" id="contactme-section">
//           Contact me
//         </Heading>
//         <Box p={6} rounded="md" w="100%">

//           <form onSubmit={formik.handleSubmit} noValidate> 
//             <VStack spacing={4}>
//               <FormControl isInvalid={formik.errors.firstName}>
//                 <FormLabel htmlFor="firstName">Name</FormLabel>
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                   value={formik.values.firstName}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.firstName && formik.errors.firstName && <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>}
//               </FormControl>

//               <FormControl isInvalid={formik.errors.email}>
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.email && formik.errors.email && <FormErrorMessage>{formik.errors.email}</FormErrorMessage>}
//               </FormControl>

//               <FormControl isInvalid={formik.errors.type}>
//                 <FormLabel htmlFor="type">Type of enquiry</FormLabel>
//                 <Select id="type" name="type"
//                   value={formik.values.type}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="hireMe">Freelance project proposal</option>
//                   <option value="openSource">
//                     Open source consultancy session
//                   </option>
//                   <option value="other">Other</option>
//                 </Select>
//               </FormControl>

//               <FormControl isInvalid={formik.errors.comment}>
//                 <FormLabel htmlFor="comment">Your message</FormLabel>
//                 <Textarea
//                   id="comment"
//                   name="comment"
//                   height={250}
//                   value={formik.values.comment}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 {formik.touched.comment && formik.errors.comment && <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>}
//               </FormControl>
//               <Button type="submit" colorScheme="purple" width="full">
//                 Submit {isLoading && "..."}
//               </Button>
//             </VStack>
//           </form>
//         </Box>
//       </VStack>
//     </FullScreenSection>
//   );
// };

// export default LandingSection;

import React, {useEffect} from "react"; 
import { useFormik } from "formik"; 
import { 
 Box, 
 Button, 
 FormControl, 
 FormErrorMessage, 
 FormLabel, 
 Heading, 
 Input, 
 Select, 
 Textarea, 
 VStack, 
} from "@chakra-ui/react"; 
import * as Yup from 'yup'; 
import FullScreenSection from "./FullScreenSection"; 
import useSubmit from "../hooks/useSubmit"; 
import {useAlertContext} from "../context/alertContext"; 
 
/** 
* Covers a complete form implementation using formik and yup for validation 
*/ 
const ContactMeSection = () => { 
 const {isLoading, response, submit} = useSubmit(); 
 const { onOpen } = useAlertContext(); 
 
 const formik = useFormik({ 
   initialValues: { 
     firstName: "", 
     email: "", 
     type: "hireMe", 
     comment: "", 
   }, 
   onSubmit: (values) => { 
     submit('https://john.com/contactme', values); 
   }, 
   validationSchema: Yup.object({ 
     firstName: Yup.string().required("Required"), 
     email: Yup.string().email("Invalid email address").required("Required"), 
     comment: Yup.string() 
       .min(25, "Must be at least 25 characters") 
       .required("Required"), 
   }), 
 }); 
 
 useEffect(() => { 
   if (response) { 
     onOpen(response.type, response.message); 
     if (response.type === 'success') { 
       formik.resetForm(); 
     } 
   } 
 }, [response]); 
 
 return ( 
   <FullScreenSection 
     isDarkBackground 
     backgroundColor="#512DA8" 
     py={16} 
     spacing={8} 
   > 
     <VStack w="1024px" p={32} alignItems="flex-start"> 
       <Heading as="h1" id="contactme-section"> 
         Contact me 
       </Heading> 
       <Box p={6} rounded="md" w="100%"> 
         <form onSubmit={formik.handleSubmit}> 
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
               <FormLabel htmlFor="firstName">Name</FormLabel> 
               <Input 
                 id="firstName" 
                 name="firstName" 
                 {...formik.getFieldProps("firstName")} 
               /> 
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
               <FormLabel htmlFor="email">Email Address</FormLabel> 
               <Input 
                 id="email" 
                 name="email" 
                 type="email" 
                 {...formik.getFieldProps("email")} 
               /> 
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
             </FormControl> 
             <FormControl> 
               <FormLabel htmlFor="type">Type of enquiry</FormLabel> 
               <Select id="type" name="type" {...formik.getFieldProps("type")}> 
                 <option value="hireMe">Freelance project proposal</option> 
                 <option value="openSource"> 
                   Open source consultancy session 
                 </option> 
                 <option value="other">Other</option> 
               </Select> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
               <FormLabel htmlFor="comment">Your message</FormLabel> 
               <Textarea 
                 id="comment" 
                 name="comment" 
                 height={250} 
                 {...formik.getFieldProps("comment")} 
               /> 
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
             </FormControl> 
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack> 
   </FullScreenSection> 
 ); 
}; 
 
export default ContactMeSection;
