export const name="waves-arrow-up";
export const id="dl_f7b314b76ef0489b8e5c";
export const url=new URL("../icons/waves-arrow-up.svg?v=0982b08de4e651cb6f41ff15685b71524057689d64490eacdef90c637b141bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
