export const name="colorize-fill";
export const id="dl_d75178e3bf1535b6658b";
export const url=new URL("../icons/colorize-fill.svg?v=4ffb7cc4776088417030edbc0873347e40ecca95bb2f45058bfa985fe70fe533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
