export const name="share-bold";
export const id="dl_13dfb7ecff4c284b0536";
export const url=new URL("../icons/share-bold.svg?v=ef0a6960d3cc56a9150ccf4a7c417a7bb2e734b7a77f59f6a9c4f49f6b1c15fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
