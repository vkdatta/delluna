export const name="lucid_1-chart-bar-big";
export const id="dl_c49b44f05d314ec78a9f";
export const url=new URL("../icons/lucid_1-chart-bar-big.svg?v=a5fb73629ca6c78b777b4e6a9e4b22132d4af212c6d43e44391c8a9cc79f2026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
