export const name="note-pencil";
export const id="dl_7f7a6cfca1d74fc084c6";
export const url=new URL("../icons/note-pencil.svg?v=c69261e9f020017ec2df29a522f75fa1957852cc7374a0be9405bfc5d7abea7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
