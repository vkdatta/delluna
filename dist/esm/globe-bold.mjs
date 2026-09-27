export const name="globe-bold";
export const id="dl_41939bac5bdd41e5b2b2";
export const url=new URL("../icons/globe-bold.svg?v=dc50454633b033b7007f621d4a0f6963e893b851e363e5d1455b3e6035cbd084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
