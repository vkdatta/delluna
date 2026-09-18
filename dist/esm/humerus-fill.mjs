export const name="humerus-fill";
export const id="dl_b61d3bf2c9d546b58a21";
export const url=new URL("../icons/H/humerus-fill.svg?v=4e8f3d0f6ae941af449314808777146d0c1d84015869d5cb1b7ad56b7e018235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
