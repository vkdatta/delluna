export const name="lucid_3-parking-meter";
export const id="dl_fa93366d66eb43288a8e";
export const url=new URL("../icons/lucid_3-parking-meter.svg?v=6cb0c8772fffea81c85845b4534f5c493ba7da24993a551f241b108c47a67172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
