export const name="rewind-duotone";
export const id="dl_1abd18a4f47b4ce19e7a";
export const url=new URL("../icons/rewind-duotone.svg?v=b8fcf23b5146d95979c11a4584e27ba55d0f8b427b290c8080b32073725d3f67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
