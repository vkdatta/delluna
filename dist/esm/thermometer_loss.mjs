export const name="thermometer_loss";
export const id="dl_37d2202959647e3879c3";
export const url=new URL("../icons/thermometer_loss.svg?v=be97e8ae0e8c6b10b90bbe8d1bc62363f06ac123cff2944a6a6db250814c182b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
