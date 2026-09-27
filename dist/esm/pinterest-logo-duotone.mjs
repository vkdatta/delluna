export const name="pinterest-logo-duotone";
export const id="dl_77bb3b5b18534038a494";
export const url=new URL("../icons/pinterest-logo-duotone.svg?v=0119a9c692f5ad30677c94b266b84e64da6d3ac451c6a083a29a0c7bd258219a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
