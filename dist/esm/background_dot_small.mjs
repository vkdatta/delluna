export const name="background_dot_small";
export const id="dl_3e54becab4b64f11b381";
export const url=new URL("../icons/B/background_dot_small.svg?v=434e58a8582deb90ba4b3880d32b250ba1844ae8c0f77bc21a5c58b12850f029",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
