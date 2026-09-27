export const name="battery_android_frame_question";
export const id="dl_468f9a325fe7a6f6b766";
export const url=new URL("../icons/battery_android_frame_question.svg?v=782a1446bda4a8519224ef33971311bf0c75f70e58f8e6c90f4ec323bc1317a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
