export const name="custom_typography";
export const id="dl_fed6f997f6ff86993b67";
export const url=new URL("../icons/custom_typography.svg?v=a6d541000c68e4fbf6f6392bd38ad069c690dec49015f8992f2e2a3e0dd9c510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
