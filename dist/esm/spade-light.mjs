export const name="spade-light";
export const id="dl_82f506a1e418416b8495";
export const url=new URL("../icons/S/spade-light.svg?v=71d9014ae81d7f66255e77f842d3e303e0668918ce3dafc303ebf8f7316de60f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
