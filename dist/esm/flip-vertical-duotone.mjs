export const name="flip-vertical-duotone";
export const id="dl_d43dbb18341548388f0d";
export const url=new URL("../icons/flip-vertical-duotone.svg?v=5c131fa5bde8e7bc0e751df5e60e1992bdd72e4cc7592d85197449ead45a0286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
