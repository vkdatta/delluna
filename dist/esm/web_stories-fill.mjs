export const name="web_stories-fill";
export const id="dl_8dd4cee6487945f989f5";
export const url=new URL("../icons/W/web_stories-fill.svg?v=b475c7ad55f6ce7bb23292cd9e5743329ae143fdae5d6e7e9100cafb14235110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
