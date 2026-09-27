export const name="10k";
export const id="dl_3b761c8ed47228834c95";
export const url=new URL("../icons/10k.svg?v=9fabd4365825fab2f2273405270d49b57591ad6827c024c40399da784979faa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
