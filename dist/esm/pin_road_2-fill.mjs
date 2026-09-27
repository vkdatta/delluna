export const name="pin_road_2-fill";
export const id="dl_0561eff8e09b77326db9";
export const url=new URL("../icons/pin_road_2-fill.svg?v=fe27f35b5458d6d9d9da726c2c663bcd556d55a1248530ac1f5ffa0def03317f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
