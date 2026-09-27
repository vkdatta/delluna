export const name="cooking-fill";
export const id="dl_edd6e50285f70382d47e";
export const url=new URL("../icons/cooking-fill.svg?v=14dc216efb535e9ac8af0aab5bd1a2d49e216a7ae55f3127759a08c8268543a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
