export const name="bluetooth-fill";
export const id="dl_bc49da12a48a44c2a720";
export const url=new URL("../icons/bluetooth-fill.svg?v=276346d2e1daab11fbc285ef11eddb0c5c6ecf652f82fdc33e7018d3a86e066e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
