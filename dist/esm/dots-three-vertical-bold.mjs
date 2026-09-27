export const name="dots-three-vertical-bold";
export const id="dl_72ddc849b2f143c9a30b";
export const url=new URL("../icons/dots-three-vertical-bold.svg?v=656fb76c9df56c0c246f0bc2d2e8fe6aca16f4dcc428438cc38c949b63f85f6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
