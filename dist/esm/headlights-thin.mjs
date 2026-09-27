export const name="headlights-thin";
export const id="dl_458222106c194befb7d5";
export const url=new URL("../icons/headlights-thin.svg?v=bce43c7366a0eb1e9010cdb4a1aedf31e67ad85dc95758d7605c7ed38a29bdb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
