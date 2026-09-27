export const name="seal-question-fill";
export const id="dl_4d4e980c9ccbc718925b";
export const url=new URL("../icons/seal-question-fill.svg?v=48a309d09ac7421aeed794653e8a30204cb88482aac3dcd5861f73e4b0ca2f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
