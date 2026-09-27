export const name="directions-fill";
export const id="dl_c88cf46a7d335aa7243a";
export const url=new URL("../icons/directions-fill.svg?v=3ee95b5d62640dabcb088df8e34017607e2d099f81030287d5cdedc3ef6a2bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
