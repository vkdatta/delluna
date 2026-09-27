export const name="flip-horizontal-thin";
export const id="dl_a11e61dbfc7447829163";
export const url=new URL("../icons/flip-horizontal-thin.svg?v=6e3325ff6af0b16842adbe8a5141ba98eb28c3a8f463395abf74352bc190e45b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
