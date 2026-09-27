export const name="hand-peace-bold";
export const id="dl_28a7240a84ae4dfca5d7";
export const url=new URL("../icons/hand-peace-bold.svg?v=73dc856c266574e6c52ec7eaae51f0c6214efd2e2aae57008f93f07fd82dfe74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
