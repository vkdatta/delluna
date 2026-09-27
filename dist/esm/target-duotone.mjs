export const name="target-duotone";
export const id="dl_476d98bee48231573e57";
export const url=new URL("../icons/target-duotone.svg?v=16f1aa0785af048581259068da43e254dbdfe88b04331cd89578009db9838c76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
