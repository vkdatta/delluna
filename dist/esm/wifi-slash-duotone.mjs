export const name="wifi-slash-duotone";
export const id="dl_0fbc2654accc4f8e8b59";
export const url=new URL("../icons/W/wifi-slash-duotone.svg?v=4da28298f9aa42198467bc45627e00819e5c7f6f4a60df7248ffcce82c25feb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
