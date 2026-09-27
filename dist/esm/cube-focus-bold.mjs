export const name="cube-focus-bold";
export const id="dl_48bca7037ea4443696a1";
export const url=new URL("../icons/cube-focus-bold.svg?v=3798eda037531695d54444640a7566ba0af39c6699fe9d7891c79efb52432458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
