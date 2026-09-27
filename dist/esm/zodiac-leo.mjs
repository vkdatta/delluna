export const name="zodiac-leo";
export const id="dl_44cbdff2a3f4407391cb";
export const url=new URL("../icons/zodiac-leo.svg?v=7725fae40b1e0f0dc1954a8e9fde6191d36fac5286b80f59be03c1a5341edffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
