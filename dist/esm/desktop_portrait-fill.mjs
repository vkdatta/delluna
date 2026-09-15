export const name="desktop_portrait-fill";
export const id="dl_e2cb6abd4a6f42929ca5";
export const url=new URL("../icons/D/desktop_portrait-fill.svg?v=e4969fcb274b12291794f6a6f0dca3e6d1fa2ed6fc6adc280ee08765fe895a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
