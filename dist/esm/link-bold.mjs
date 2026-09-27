export const name="link-bold";
export const id="dl_41f03331d0c04def8e71";
export const url=new URL("../icons/link-bold.svg?v=ee72639959ded25b18eaa85c274a61238d47008f114d88ca2e1078d59c476393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
