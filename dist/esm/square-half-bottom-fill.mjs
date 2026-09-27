export const name="square-half-bottom-fill";
export const id="dl_d393847d5d68f4d9dc17";
export const url=new URL("../icons/square-half-bottom-fill.svg?v=34a32322bde65d3330a51c511c2910fa46e6fa208a57c16bd8d761b12a53eb93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
