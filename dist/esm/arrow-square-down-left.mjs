export const name="arrow-square-down-left";
export const id="dl_beb19eeac64e4d3c9e93";
export const url=new URL("../icons/arrow-square-down-left.svg?v=a1c648646e694203f31b805535c4c959ec906b01a54faa660c8a9fa31800a16d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
