export const name="hourglass_arrow_up";
export const id="dl_b0c2a72c44e5c12ce68d";
export const url=new URL("../icons/hourglass_arrow_up.svg?v=264eef6f5dc5e12f7e61214b723076af9d95e8779b2482a6059853762061b2c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
