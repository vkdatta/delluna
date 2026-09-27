export const name="train-simple-light";
export const id="dl_19635fc9473006b4e47f";
export const url=new URL("../icons/train-simple-light.svg?v=9b05f24332da98ee42f11b1a8aa1a1a5a6a63db2dedf678e9046f20616bc36a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
