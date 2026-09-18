export const name="severe_cold";
export const id="dl_62736b3e3bbe4d1c9fd1";
export const url=new URL("../icons/severe_cold.svg?v=3e3c981c3060e1034073cb12d425f4d5426ae875146014fb3b4a33e92e27abc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
