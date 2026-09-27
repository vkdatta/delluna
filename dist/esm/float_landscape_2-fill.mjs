export const name="float_landscape_2-fill";
export const id="dl_c84929418a194f5ef79c";
export const url=new URL("../icons/float_landscape_2-fill.svg?v=8f4d73aaf6103e634bd6945dad4a099c92a1a1bce35b177a8c1534706f73e6c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
