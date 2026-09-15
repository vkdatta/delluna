export const name="doorbell_3p-fill";
export const id="dl_83f116cd8b61444384cc";
export const url=new URL("../icons/D/doorbell_3p-fill.svg?v=d4e71c5642d0f1ec23e2586647279b156bcf62f54dff5cc1011872064288c6db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
