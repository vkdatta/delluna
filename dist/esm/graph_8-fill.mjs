export const name="graph_8-fill";
export const id="dl_3f09716e6db745978aeb";
export const url=new URL("../icons/graph_8-fill.svg?v=13a3d268d82b867a05cb233092d5ee15e65c02ca4e3084d9281178adb91e82e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
