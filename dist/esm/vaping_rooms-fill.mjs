export const name="vaping_rooms-fill";
export const id="dl_600280146fc247606c57";
export const url=new URL("../icons/vaping_rooms-fill.svg?v=30c75482ae3a0febccfe9e52de56aa06847df8cfc1287ea3e347246bf5e26d5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
