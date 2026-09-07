export const name="toilet-fill";
export const id="dl_988efeb656fd4a3bb1b3";
export const url=new URL("../icons/T/toilet-fill.svg?v=d3860de8760bb7715ba68c5af5ed45251eb39168fdfa522be78f264df77fcd69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
