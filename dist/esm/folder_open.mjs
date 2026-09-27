export const name="folder_open";
export const id="dl_b3548547d1d3dcb6310c";
export const url=new URL("../icons/folder_open.svg?v=c22926a1a46ed0b23f7dd04251159d3ecfcfb900d8628a979fbd154e7c9f7b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
