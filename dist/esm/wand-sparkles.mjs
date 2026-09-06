export const name="wand-sparkles";
export const id="dl_68e7b35f73034c1a9538";
export const url=new URL("../icons/wand-sparkles.svg?v=9fc031e164959b069eb87b07d5a4379d97a430b16ce468d2f1ea0db47ee04c16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
