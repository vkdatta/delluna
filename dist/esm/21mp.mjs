export const name="21mp";
export const id="dl_0bf8144f2a9954a7d4d7";
export const url=new URL("../icons/21mp.svg?v=f1a890fe52cb6f29cae0c341a698bfd7cb0d847f2a111108237330b72f33022a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
