export const name="tags";
export const id="dl_a39f01d305f9434c9d19";
export const url=new URL("../icons/tags.svg?v=7748bb2cf3e75e110964e13a20299a2b9e5b2a5b06fb931c8a2f205f46705cf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
