export const name="humidity_high";
export const id="dl_6db00e1294da751eaab4";
export const url=new URL("../icons/humidity_high.svg?v=f67178fce103af86fe10e1fcee185627b2bafd2c3550ec3c120f3cb67677c9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
