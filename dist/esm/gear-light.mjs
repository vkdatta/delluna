export const name="gear-light";
export const id="dl_b474020b68734c1ca7e3";
export const url=new URL("../icons/gear-light.svg?v=7d86bbfaaf549f6ca05b3d18ccf2c35ead614569495695d546a0e397183fb9c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
