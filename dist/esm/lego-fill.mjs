export const name="lego-fill";
export const id="dl_ee545a3f01fd40ec88ee";
export const url=new URL("../icons/lego-fill.svg?v=148b75305e18b11d059d0c459607cb5aad379b63773ca96804f9bcd8f2cd6dce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
