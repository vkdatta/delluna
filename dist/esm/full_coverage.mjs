export const name="full_coverage";
export const id="dl_07718cd3a5cd5726d7d3";
export const url=new URL("../icons/full_coverage.svg?v=3c69ffd0daa1a692e6dbdef48b73cc9569abb7caa6bf1f18a466c3a1f0bc2ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
