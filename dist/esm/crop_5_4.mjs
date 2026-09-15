export const name="crop_5_4";
export const id="dl_afc766df1fe54ce1b2de";
export const url=new URL("../icons/C/crop_5_4.svg?v=d3f7374a4190f1d08b4fa0268d4e8d7659004026a2e32280bef583aae2f40823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
