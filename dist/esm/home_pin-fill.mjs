export const name="home_pin-fill";
export const id="dl_a78e5716106edf43cfab";
export const url=new URL("../icons/home_pin-fill.svg?v=cbaf9e7a3cbce24136237c96f7fa30a162f6617c0a0310e7e16038c336b896b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
