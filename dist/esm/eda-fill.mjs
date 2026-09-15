export const name="eda-fill";
export const id="dl_5a32b66a3d99405992a0";
export const url=new URL("../icons/E/eda-fill.svg?v=5013a1dff1655ae3be67d23d6df07082e872048967c539d61fc9d996816585e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
