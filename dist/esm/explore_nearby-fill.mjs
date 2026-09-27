export const name="explore_nearby-fill";
export const id="dl_49c9fe7750635c234b64";
export const url=new URL("../icons/explore_nearby-fill.svg?v=6d5547036a33255eb2115c8465f8aa8b06456a4be8d15b8856971ab5bd0f3a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
