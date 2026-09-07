export const name="rss-light";
export const id="dl_007191425c2a49b0ae6b";
export const url=new URL("../icons/rss-light.svg?v=abb904b858174101a8a1824506c741fb9fa1bcd8e20fba99a5b4b19aac41f880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
