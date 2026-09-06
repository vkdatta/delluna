export const name="memory-duotone";
export const id="dl_38e1b6d7c7614ccfa655";
export const url=new URL("../icons/memory-duotone.svg?v=f4d719e6a114fc5c06e1bce199e9fb18633605fbcbb27bd60d552a32be9e9be9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
