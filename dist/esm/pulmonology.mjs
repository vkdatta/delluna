export const name="pulmonology";
export const id="dl_2e176cfed18c4a1baca2";
export const url=new URL("../icons/P/pulmonology.svg?v=374e09a82da69d2538e8bfef999d702fa2933ca5c11d30da1f6f6dc97b219464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
