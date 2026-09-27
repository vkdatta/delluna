export const name="build_circle-fill";
export const id="dl_de2eb29097cee8b06c74";
export const url=new URL("../icons/build_circle-fill.svg?v=7b10c2ede033eade16622b5b8659fb36c29d7d755f5425595a695fd8a9f07b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
