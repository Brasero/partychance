import {Card} from "@/components/ui/card";
import Image from "next/image";

type ImagePreviewProps = {
  files:FileList;
}
export default function ImagePreview({files}:ImagePreviewProps){
  if(files.length === 0){
    return null
  }
  return (
    <div className={"flex items-center justify-start h-[45px} mb-5 gap-2 flex-wrap"}>
      {
        Array.from(files).map((file,index) => {
          return(
            <Card className={"h-fit flex align-center p-0 overflow-hidden"} key={index}>
              <Image alt={"Preview"} width={80} height={80} style={{width:"80px", objectFit:"cover", aspectRatio:"1/1"}} src={URL.createObjectURL(file)}/>
            </Card>
          )
        })
      }
    </div>
  )
}