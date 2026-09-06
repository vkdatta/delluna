export const name="lucid_2-grid-2x2-check";
export const id="dl_aec91f53ecf74648b9ea";
export const url=new URL("../icons/lucid_2-grid-2x2-check.svg?v=bfbff26401c9213bd99aa252056b3c61360d13bf4dd31446fe3a1a6e2ec99e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
