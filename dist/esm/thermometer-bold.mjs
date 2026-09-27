export const name="thermometer-bold";
export const id="dl_c32135376e3ccdbf3517";
export const url=new URL("../icons/thermometer-bold.svg?v=2949a5b64f5c95fbd842f6fdec8de8cede4f4b3480d48496cec8bc741304ffb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
