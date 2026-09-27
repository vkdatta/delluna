export const name="bath_outdoor-fill";
export const id="dl_bdb4d602a02b6e58594e";
export const url=new URL("../icons/bath_outdoor-fill.svg?v=89b43453429fbe9473248df58d7b551e395eb30427b34085d18c4877b3f9a2cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
