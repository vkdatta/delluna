export const name="lucid_3-redo-2";
export const id="dl_c6c687fde0a448bbb481";
export const url=new URL("../icons/lucid_3-redo-2.svg?v=bb02b23ce95964dd4993f6f5c5c5eec3bc5dc249aacae9b01680fc2d747c7ac4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
