export const name="gear-light";
export const id="dl_b474020b68734c1ca7e3";
export const url=new URL("../icons/gear-light.svg?v=f31ef3e36fb8ffdbdffba0cff464412fe3f903c606e06438129f7a7937b366e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
