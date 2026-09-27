export const name="sprinkler-fill";
export const id="dl_3d4faaa1ef110e7d5ca6";
export const url=new URL("../icons/sprinkler-fill.svg?v=bd6e80f27d71a154149c5482cbf2d7a0e90d30fd3e08727c2763aeb804b0a937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
