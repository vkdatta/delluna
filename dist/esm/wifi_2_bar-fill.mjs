export const name="wifi_2_bar-fill";
export const id="dl_56ec326688272d86f413";
export const url=new URL("../icons/wifi_2_bar-fill.svg?v=4b50764a206960ccce475ba05c24c07758c1071639671a1c51f695ec486f3dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
