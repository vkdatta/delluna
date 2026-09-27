export const name="caret-circle-double-down-fill";
export const id="dl_cae19b08b88b495e9170";
export const url=new URL("../icons/caret-circle-double-down-fill.svg?v=e5680f16de5de394b8485b767256f5076d654d3e7172223f6aefe25f4c2c2194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
