export const name="lucid_3-navigation";
export const id="dl_0bdea1773f4c47efb4ba";
export const url=new URL("../icons/lucid_3-navigation.svg?v=4c30b4ba528ac55ee64bd55c4f0681217a9ee566b1bb1db54b5249eb4580573b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
