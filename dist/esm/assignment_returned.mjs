export const name="assignment_returned";
export const id="dl_8062dcb15f683fc943ec";
export const url=new URL("../icons/assignment_returned.svg?v=815550e7296029c52a8526fb1081d706a212cf23f1d04e3348d8ad45e2e4dcd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
