export const name="water_pump-fill";
export const id="dl_17fbb1f3666cba28f16f";
export const url=new URL("../icons/water_pump-fill.svg?v=67b1c17dd0cf1a296d3ab3d4e4a8e881db4b58de3b917c70216f1e89995d739c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
