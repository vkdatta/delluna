export const name="wifi-none-bold";
export const id="dl_5db52ea0be19429a9672";
export const url=new URL("../icons/W/wifi-none-bold.svg?v=47687c6b6147e7ae6000a35a73b73122d202bf8fc541f480d5b147e7d2fd8f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
