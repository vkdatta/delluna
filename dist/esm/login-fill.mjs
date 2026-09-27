export const name="login-fill";
export const id="dl_af4eaff77f4052b036fa";
export const url=new URL("../icons/login-fill.svg?v=ecbaa70215f77bade779642d15d3e788a57ade46ef4efb4a48cbcffbbc9e63b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
