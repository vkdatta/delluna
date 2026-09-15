export const name="commute";
export const id="dl_76ce69813c974a4fb90b";
export const url=new URL("../icons/C/commute.svg?v=3284b17028da49c7f0656d894aa3c0576755e97480a94e8459503055118ed9a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
