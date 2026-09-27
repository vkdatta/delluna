export const name="language_korean_latin-fill";
export const id="dl_b1a6b9d32352d81099d3";
export const url=new URL("../icons/language_korean_latin-fill.svg?v=ef2ace11aa31eff6924f3a3edcab6008d507cc8fc88b384c725ebac9bf7732b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
