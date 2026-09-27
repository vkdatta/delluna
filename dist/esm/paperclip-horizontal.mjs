export const name="paperclip-horizontal";
export const id="dl_a2f04ff39ca24e638d87";
export const url=new URL("../icons/paperclip-horizontal.svg?v=46e5850a99766282e0d3d4b6c848a1391a50f331346f74847f368a9bc0b891f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
