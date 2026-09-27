export const name="target-fill";
export const id="dl_399aafb966dd68bae4c4";
export const url=new URL("../icons/target-fill.svg?v=543fbf7accbe363ee6a4407f269b06f844f2b2a6c1ee5d5601acabb37f0446bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
