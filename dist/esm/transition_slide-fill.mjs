export const name="transition_slide-fill";
export const id="dl_4c427603f4f82ae5c2a2";
export const url=new URL("../icons/transition_slide-fill.svg?v=d64e0fc1e00aa230acd762eb3571592947cbf943cad3d9ed54df1043269ffc74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
