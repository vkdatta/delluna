export const name="lucid_1-badge-indian-rupee";
export const id="dl_e8c274543c814bf6b52f";
export const url=new URL("../icons/lucid_1-badge-indian-rupee.svg?v=d67c34b496682868777b3f9d6055b73563e43937794b060bd525f56954e10363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
