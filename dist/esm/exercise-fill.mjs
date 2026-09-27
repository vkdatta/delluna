export const name="exercise-fill";
export const id="dl_d2b856bd288bcb6cd0f6";
export const url=new URL("../icons/exercise-fill.svg?v=4d782a33d101e2c947968b0f6552302c1635054c1ed86e361b4a896914b9812e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
