export const name="assignment_returned-fill";
export const id="dl_f2f2957839d88097fa8d";
export const url=new URL("../icons/assignment_returned-fill.svg?v=abab7e2823ecfb790f299d010fb9daa43d677769e63e9b5df9b5dba4d54f0523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
