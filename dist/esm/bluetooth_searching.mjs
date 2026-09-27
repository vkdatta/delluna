export const name="bluetooth_searching";
export const id="dl_874876dda3d428c8c362";
export const url=new URL("../icons/bluetooth_searching.svg?v=95a98f6e7a55c2f22df2986a94361ffd32bc7fdbeeb1ce4596d3d1ed01fdf74d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
