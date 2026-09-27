export const name="ecg";
export const id="dl_ab9dc1908f768a0a2e9b";
export const url=new URL("../icons/ecg.svg?v=69b7630724792b1b21575023db835ed394b63dbf1a6e3043c1bf5fc4cb7790f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
