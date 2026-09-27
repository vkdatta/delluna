export const name="beer-bottle-bold";
export const id="dl_3ded1a1f609d4a3e9645";
export const url=new URL("../icons/beer-bottle-bold.svg?v=750536483dd698c0aeb163a2c1a76978a992d413f2f5a295e57ee0658be60e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
