export const name="recycling-fill";
export const id="dl_ca5d68010db056d9f897";
export const url=new URL("../icons/recycling-fill.svg?v=f95789e3c72a1ef1d00e6cb25adc6e972be29f81b2e3e83179ef51feadb497a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
