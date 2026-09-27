export const name="elevation";
export const id="dl_b76ccd829232c8dfc6f0";
export const url=new URL("../icons/elevation.svg?v=d20a025e6db0454ce6da7c4315cc4cfdf7dbf13228f85a2ee95491bdf0e88729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
