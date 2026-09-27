export const name="film-script-bold";
export const id="dl_6d3079ba6ed24d59bc7f";
export const url=new URL("../icons/film-script-bold.svg?v=e9a2167757b92626bd93088f24e6637ea33986d4bbec8ce30b762d8cb895ec11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
