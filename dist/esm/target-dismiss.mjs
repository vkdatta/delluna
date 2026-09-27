export const name="target-dismiss";
export const id="dl_c6e7d0bd95ca8a87763f";
export const url=new URL("../icons/target-dismiss.svg?v=5bf12131fa5693129bf17b3acceebe3b9dc3a85811a5ef4bccfc7d2fbbc6dd7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
