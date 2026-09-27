export const name="beer-bottle-light";
export const id="dl_8f8ca07de2ff477897cd";
export const url=new URL("../icons/beer-bottle-light.svg?v=fac10ab8dce1d799f4064b8d6cc6dbc1dbf8017f33dbce0868e5d63123952b3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
