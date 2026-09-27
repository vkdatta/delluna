export const name="magnifying-glass-minus-bold";
export const id="dl_03a0d7f6a6b240e9becd";
export const url=new URL("../icons/magnifying-glass-minus-bold.svg?v=d56a7bcf00bf5b99d60386f9eb9f75521ac0621cd82df089258c3b2592f03efc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
