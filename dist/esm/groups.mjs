export const name="groups";
export const id="dl_9947e67ae2c7b8f01916";
export const url=new URL("../icons/groups.svg?v=37ae2d1849688839a561cd2cca1aedeb6de25a7410dc94900b53db5b9a3d349d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
