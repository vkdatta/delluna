export const name="lucid_2-copy-plus";
export const id="dl_afef460d5dd1466db74b";
export const url=new URL("../icons/lucid_2-copy-plus.svg?v=045a8eaa5fdf6e3b830be8ee6329991fcf0c0a175f9e581e2e3ba6718f4c986d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
