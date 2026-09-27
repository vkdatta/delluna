export const name="replit-logo-bold";
export const id="dl_910cbe382edb474a8088";
export const url=new URL("../icons/replit-logo-bold.svg?v=245753615a3f5243046180c19ad00e632ce2e0661cc8f3b5ed56d029afbb0a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
