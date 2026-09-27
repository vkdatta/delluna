export const name="person-simple-snowboard";
export const id="dl_8bdcf1f49b1d42f39b4a";
export const url=new URL("../icons/person-simple-snowboard.svg?v=56c55bf167e17bb59373cd7fee6196b2f67aee60e0ad7a111aae4034fe45f2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
