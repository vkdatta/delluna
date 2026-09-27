export const name="racquet-fill";
export const id="dl_48d8469dc3ce471a9610";
export const url=new URL("../icons/racquet-fill.svg?v=0a02a1d5e25e82edcd47feccca0b54ba29b0468f7631d9afb0c3779df523d757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
