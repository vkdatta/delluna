export const name="detector-fill";
export const id="dl_bb4387f645c39773ca62";
export const url=new URL("../icons/detector-fill.svg?v=55b775e5f017b767896403a9fc7ce4dcdee8b3c1bc9ba042b08070759b8b6309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
