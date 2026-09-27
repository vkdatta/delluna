export const name="fertile-fill";
export const id="dl_2260c696bdf978ce4b72";
export const url=new URL("../icons/fertile-fill.svg?v=07801462405ca14a1b7ed944c991f0cef3d5b0b7cdf72c0ef2f0fe4666f554a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
