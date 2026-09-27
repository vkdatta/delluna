export const name="mark_as_unread-fill";
export const id="dl_fd0af0c86ea71bd35146";
export const url=new URL("../icons/mark_as_unread-fill.svg?v=1b737d4867d23964017b2857f373e42ed9ba5623930b532000db964238471e4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
