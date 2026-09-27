export const name="selectAll";
export const id="dl_1adb7f6aa93b026b4caf";
export const url=new URL("../icons/selectAll.svg?v=e3b825e27cd00c91e860201ea27c38cd9e940a7dcd6bc767d33e6f1b86edc711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
