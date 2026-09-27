export const name="speed_1_7x";
export const id="dl_31f0818d0237d24ccbde";
export const url=new URL("../icons/speed_1_7x.svg?v=e1480ae636fd7383da9fc9f56b4b4332e49b7a79fb9b520bbe7cd2455ff0671c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
