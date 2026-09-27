export const name="seal-warning-duotone";
export const id="dl_97bdafaf23a791e0490d";
export const url=new URL("../icons/seal-warning-duotone.svg?v=2e39db0594485f580c72f866efe418f9e41bb9c536790601e3044a0d5ff8dd17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
