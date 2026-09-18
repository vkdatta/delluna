export const name="bubble_chart";
export const id="dl_fb0588188d0b4960bb33";
export const url=new URL("../icons/bubble_chart.svg?v=b39450fd474956079095d4c30425a2d22fe16358c20656ed0b0a72e7ae33baaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
