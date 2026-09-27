export const name="psychology-fill";
export const id="dl_a6379070de6f909418e8";
export const url=new URL("../icons/psychology-fill.svg?v=5c71e5063650307cc1bc6d6250667a13ba7c7fe470ceaf011e627af457b9377d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
