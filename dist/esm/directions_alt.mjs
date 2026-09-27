export const name="directions_alt";
export const id="dl_a2a2b957a2187e301c33";
export const url=new URL("../icons/directions_alt.svg?v=919ee31fad72e055443474e02b8b281f4d644c73e56de63dc140398cc6748e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
