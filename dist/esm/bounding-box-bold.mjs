export const name="bounding-box-bold";
export const id="dl_134a9d38def045588264";
export const url=new URL("../icons/bounding-box-bold.svg?v=ee9afa6e5cabccb443a9c940f1a39aa3616f780c61cb78e8f9f9262194bbc738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
