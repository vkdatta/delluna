export const name="altitude-fill";
export const id="dl_1629c3037473ad237f85";
export const url=new URL("../icons/altitude-fill.svg?v=d650d8a7819f19fb622fb827e8907ff8ef840d6303bd7823cc9682f2ed90e628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
