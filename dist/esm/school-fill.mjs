export const name="school-fill";
export const id="dl_1fc41f479ace489baf6b";
export const url=new URL("../icons/S/school-fill.svg?v=1f2029db5a44536281f7f8f1d74068a229173051210945a6714856924808dc92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
