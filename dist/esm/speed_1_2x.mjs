export const name="speed_1_2x";
export const id="dl_f99750cfc28867d58d45";
export const url=new URL("../icons/speed_1_2x.svg?v=9d201b159871ae61414ffc18565a664b0b86385e99b2ed6922c6244b5bcf922f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
