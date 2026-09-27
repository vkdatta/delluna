export const name="hamburger";
export const id="dl_ecaaf65177f64dd8b4e9";
export const url=new URL("../icons/hamburger.svg?v=b207c5b9f822a6177b03a8b8299e6b9f2f10bef73f43d3c90e04a5bd39538ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
