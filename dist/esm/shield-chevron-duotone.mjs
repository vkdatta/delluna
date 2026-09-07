export const name="shield-chevron-duotone";
export const id="dl_e5bc9393248d4d5c9f2c";
export const url=new URL("../icons/S/shield-chevron-duotone.svg?v=e147b2f41839ac6d00f9fa97064152865c067871569377d46ed6ebb1756e6757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
