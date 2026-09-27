export const name="page_info";
export const id="dl_545bb49fd16b01f01c02";
export const url=new URL("../icons/page_info.svg?v=40107c593c86d1c823944fe3aa39a693bb9351d84239492b413aa8e4e4aa685d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
