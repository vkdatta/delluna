export const name="breaking_news_alt_1-fill";
export const id="dl_6c1107c5618d2219f562";
export const url=new URL("../icons/breaking_news_alt_1-fill.svg?v=27a7ff59954c7af61df7d87bf10df7f8ea5ce109adc7050a6c2565a3dde17537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
