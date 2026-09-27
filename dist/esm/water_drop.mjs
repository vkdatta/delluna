export const name="water_drop";
export const id="dl_74e12623c65fe8f82061";
export const url=new URL("../icons/water_drop.svg?v=dbfe7fbd90af80109b252ab1d4898413ecfcb208634c86429b40a6551ab623d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
