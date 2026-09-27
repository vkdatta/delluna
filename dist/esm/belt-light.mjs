export const name="belt-light";
export const id="dl_8a32ea3392d24887b7bc";
export const url=new URL("../icons/belt-light.svg?v=53a13b1e1d4f707357669c4b301f2f0edc50fc613bc2a6c1ba0a73338e32d72e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
