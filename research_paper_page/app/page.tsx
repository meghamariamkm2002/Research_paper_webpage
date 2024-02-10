import Head from "next/head";
import { Text, MantineProvider, Divider, Title } from '@mantine/core';
import Image from "next/image";
import paperimage from "./../public/images/paperimage.png";
import Link from 'next/link';




export default function Home() {
  return (
    <MantineProvider>
      <Head>
        <title>Research paper</title>
      </Head>
      <div className="flex flex-col justify-center m-10">
      <div className="flex justify-center text-align-center text-3xl mt-28 ml-28 mr-28 mb-20 ">
        <Text size="6xl" style={{ textAlign: 'center', lineHeight: '1.2' }}>
          CueCAn: Cue-driven Contextual Attention for Identifying Missing Traffic Signs on Unconstrained Roads
        </Text>
      </div>
      <Link href='https://www.icra2023.org/'><div className="mb-10 flex justify-center text-xl"><b>ICRA, 2023</b></div></Link>
      <div style={{ textAlign: 'center' }} className="-mt-10">
        <Text size="lg" style={{ whiteSpace: 'nowrap', color: 'blue', borderRight: '1px solid #ddd' }}>
          Varun Gupta
          <span style={{ margin: '0 8px', padding: '0 8px' }}>Anbumani Subramanian</span>
          C.V. Jawahar
          <span style={{ margin: '0 8px', padding: '0 8px' }}>Rohit Saluja</span>
        </Text>
      </div>
      

      <div className="flex justify-center mt-1">
      <Image src={paperimage} alt="sign in image" />
      </div>
      <Divider className="8px mb-10 mt-10" />
      <div>
      <Title className="flex justify-center text-xl mt-10">Abstract</Title>
      <div className="flex justify-between mt-5 mx-28">
        <Text>
          Unconstrained Asian streets often involve poor infrastructure, affecting overall road safety. Missing traffic signs are a regular part of such streets. 
          Missing or non-existing object detection has been studied for locating missing curbs and estimating reasonable regions for pedestrians on road scene images. 
          Such methods involve analyzing task-specific single object cues. In this paper, we present the first and most challenging video dataset for missing objects, 
          with multiple types of traffic signs for which the cues are visible without the signs in the scenes. We refer to it as the Missing Traffic Signs Video Dataset 
          (MTSVD). MTSVD is challenging compared to the previous works in two aspects: i) The traffic signs are generally not present in the vicinity of their cues, ii) 
          The traffic signs’ cues are diverse and unique. Also, MTSVD is the first publicly available missing object dataset. To train the models for identifying missing signs, 
          we complement our dataset with 10K traffic sign tracks, with 40% of the traffic signs having cues visible in the scenes. To solve the problem of identifying missing 
          traffic signs, we propose novel Cue-driven Contextual Attention units (CueCAn), which we incorporate into our model’s encoder. We first train the encoder to classify
          the presence or absence of traffic sign cues and then train the entire segmentation model end-to-end to localize missing traffic signs. Quantitative and qualitative analysis 
          shows that CueCAn significantly improves the performance of base models. Code, data, and models will be released. Refer GitHub link and supplementary for the demo.
        </Text>
      </div>
      </div>
      <Divider className="8px mb-10 mt-10" />
      <div className="flex justify-center align-center">
        <Title className="flex justify-center text-xl mt-5">Paper</Title>
      </div>
      <div className="flex justify-center mt-5 flex-col items-center">
        <div>
          <Link href="https://arxiv.org/abs/2303.02641" className="flex justify-center"> <b>CueCAn: Cue-driven Contextual Attention for Identifying Missing Traffic Signs on Unconstrained Roads</b></Link>
        </div>
        <div>
          Varun Gupta, Anbumani Subramanian†, C.V. Jawahar, Rohit Saluja
        </div>
        <div className="flex flex-row ">
          <div className="mr-10">
            <Link href='https://cvit.iiit.ac.in/images/ConferencePapers/2023/CueCAn.pdf'><b>[PDF]</b></Link>
          </div>
          <div>
            <Link href='https://github.com/iHubData-Mobility/public-CueCAn'><b>[code]</b></Link>
          </div>
        </div>
      </div>

      

  </div>

     

      
    </MantineProvider>
  );
}
