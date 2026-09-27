export const name="heart-straight-fill";
export const id="dl_5edd1edb94ae489893a3";
export const url=new URL("../icons/heart-straight-fill.svg?v=dedd3c353d3d234435ad3219eff95d041497377289727535183a87aaacde46f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
