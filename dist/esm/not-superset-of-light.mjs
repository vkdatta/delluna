export const name="not-superset-of-light";
export const id="dl_ea48be04ced442ee8de9";
export const url=new URL("../icons/not-superset-of-light.svg?v=04f1d6a288b894c6e59a6255a485cab39a9e06eb6c1a3292eb2c6b37b1c43690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
