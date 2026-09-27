export const name="folder-dashed-bold";
export const id="dl_33942625d64d4fefba2f";
export const url=new URL("../icons/folder-dashed-bold.svg?v=d91ebe6be09b1158d75fb00cc7be0ba57a0d3cc6ebec11f96e67d075758e0b2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
