export const name="arrow_drop_down_circle-fill";
export const id="dl_073f2abc3f580a438faa";
export const url=new URL("../icons/arrow_drop_down_circle-fill.svg?v=743d8662ac21b258dc8150fde029037ac464ebea0af70cd964baff9f9cf0f2f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
