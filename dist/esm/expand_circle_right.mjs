export const name="expand_circle_right";
export const id="dl_0ca6cd240076dd21446f";
export const url=new URL("../icons/expand_circle_right.svg?v=19b09e894392d881178981d0d8faa60fbbca93526fb608c9bfebbaf07f091115",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
