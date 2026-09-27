export const name="clock_loader_10";
export const id="dl_1005b74f5601093a5ac9";
export const url=new URL("../icons/clock_loader_10.svg?v=0577a9fced5d0a6cc4917001fc6e8e18d0c08029e19b2bf7462c49de2679ceca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
