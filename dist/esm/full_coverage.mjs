export const name="full_coverage";
export const id="dl_48d0d1c1ffbf45bc947b";
export const url=new URL("../icons/F/full_coverage.svg?v=3c69ffd0daa1a692e6dbdef48b73cc9569abb7caa6bf1f18a466c3a1f0bc2ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
