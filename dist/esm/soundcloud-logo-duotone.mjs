export const name="soundcloud-logo-duotone";
export const id="dl_01918c90d7ca4fa789e6";
export const url=new URL("../icons/S/soundcloud-logo-duotone.svg?v=7a4b251abf5283f2d4ce7d4d7f65562ac4e26b2e53c857a79abdcbe2558ea1d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
