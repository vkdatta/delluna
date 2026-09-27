export const name="replit-logo-bold";
export const id="dl_910cbe382edb474a8088";
export const url=new URL("../icons/replit-logo-bold.svg?v=4e9fd102c52de6a442824030181e2baf72da1aadc8e3e14a39fef946f51ed369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
