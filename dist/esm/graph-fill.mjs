export const name="graph-fill";
export const id="dl_237740bfad804fa1a40e";
export const url=new URL("../icons/graph-fill.svg?v=73eea2682fd6c43d58d448107bd01c65cd662c3890bea8d28b39964031bdd110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
