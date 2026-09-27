export const name="shades";
export const id="dl_bd6dd3775cffdf4c3110";
export const url=new URL("../icons/shades.svg?v=a7adca9d7f4a62fad104a8398e7ca9eaabdfbf77f2d48856ea5b155127fd4ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
