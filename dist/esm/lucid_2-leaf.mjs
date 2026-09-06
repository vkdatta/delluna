export const name="lucid_2-leaf";
export const id="dl_6dab8d5161f54b0bbbd1";
export const url=new URL("../icons/lucid_2-leaf.svg?v=e63312778b3346233e5789eccd9377c5c68a071ad124edaa3728f763f83fbd07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
