export const name="checked_bag-fill";
export const id="dl_f1961d831a05bc9b1199";
export const url=new URL("../icons/checked_bag-fill.svg?v=cc423fe76c80087fd5e01fa65b98d5ba45748a2b0b680d4d9f7db00e82e824d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
