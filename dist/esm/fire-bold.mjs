export const name="fire-bold";
export const id="dl_e25fab08435a4e1d95b2";
export const url=new URL("../icons/fire-bold.svg?v=bc9d540f864cfa7f6a8a1b470b2ff80501c149f121f6e93619454bc13f1c5876",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
