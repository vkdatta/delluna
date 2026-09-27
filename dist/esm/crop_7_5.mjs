export const name="crop_7_5";
export const id="dl_0786a34332013a466815";
export const url=new URL("../icons/crop_7_5.svg?v=e6032d666e4a0031f4fa2be913d3de5cb62d90fc8c88c2120326d65bde775500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
