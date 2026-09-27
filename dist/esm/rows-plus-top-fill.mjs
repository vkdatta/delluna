export const name="rows-plus-top-fill";
export const id="dl_e9b0b44ffa20478c8fbf";
export const url=new URL("../icons/rows-plus-top-fill.svg?v=eadcca689266aeede7bd025853f2356e64ee4b91df4aba9511366e4e3f71928f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
