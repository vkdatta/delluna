export const name="stack-simple-light";
export const id="dl_3e2202341c82a3133d1e";
export const url=new URL("../icons/stack-simple-light.svg?v=98e7a6d2173f249748c850370c8105bea16412f4a254f82840cf81c45fc476cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
