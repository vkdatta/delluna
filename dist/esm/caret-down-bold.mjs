export const name="caret-down-bold";
export const id="dl_497dd877f90d4461b8df";
export const url=new URL("../icons/caret-down-bold.svg?v=76a97545e1b923bc13bcc15d7bcbb7f5530105e6eaa98a18c1e30d23e3622843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
