export const name="other_houses-fill";
export const id="dl_ce9e6f6dd8febad3da8d";
export const url=new URL("../icons/other_houses-fill.svg?v=1e1f7ee5e4da29f85123187125fa059b601875f5cd00a266813af367e15ae95c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
