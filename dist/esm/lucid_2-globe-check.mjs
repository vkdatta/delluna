export const name="lucid_2-globe-check";
export const id="dl_5f6ddde44f4c4ac89020";
export const url=new URL("../icons/lucid_2-globe-check.svg?v=27b3b4a14f7d79c8f51a2e842f9e2ffc71abe249b90fdfa53bb1e517ea064ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
