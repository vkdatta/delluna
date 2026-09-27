export const name="file-lock-light";
export const id="dl_18ce6bd0311d43709692";
export const url=new URL("../icons/file-lock-light.svg?v=2f80f21c5d2ff2fc02b8d8443781024ea4461c41f4d0d8160d8ad4406246343e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
