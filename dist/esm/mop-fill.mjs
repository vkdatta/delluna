export const name="mop-fill";
export const id="dl_1da54fad4855670a2d7b";
export const url=new URL("../icons/mop-fill.svg?v=c5f5909dfba93af9269a9d9575629aae48bdc162f2e668ade28aff7481ffcc7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
