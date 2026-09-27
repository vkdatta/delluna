export const name="colors-fill";
export const id="dl_7f4cdd2f689ce081c490";
export const url=new URL("../icons/colors-fill.svg?v=99cdf11855285dafc6b7cacabc86eea28e835999915fdd8d4b43f7bcccf15054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
