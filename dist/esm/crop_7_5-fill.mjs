export const name="crop_7_5-fill";
export const id="dl_23d2e14324a21cfea763";
export const url=new URL("../icons/crop_7_5-fill.svg?v=a29789381c3551d1c71353a011d37ed6d48dd7005d8363351e7583e577b4a0da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
