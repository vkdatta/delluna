export const name="lucid_2-copy-plus";
export const id="dl_afef460d5dd1466db74b";
export const url=new URL("../icons/lucid_2-copy-plus.svg?v=815388f89991452dce863edbd2807994dca4a3949b068b3601436344f4ee81a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
