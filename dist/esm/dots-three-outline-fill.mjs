export const name="dots-three-outline-fill";
export const id="dl_01ef6bf55c1641ca8f9d";
export const url=new URL("../icons/dots-three-outline-fill.svg?v=4ccca3bad00cdff20e37339d2968b56c7b29ef7f22c66ee1c91024a5f871fc67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
