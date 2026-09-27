export const name="unknown_5-fill";
export const id="dl_c4a9e9caf93f8331f603";
export const url=new URL("../icons/unknown_5-fill.svg?v=80e9bdd4b1fb1598b7a1249c2eba6c9156e6bb57ebf6d83a408729eb00c87f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
