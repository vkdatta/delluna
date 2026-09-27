export const name="multicooker-fill";
export const id="dl_f80b62c4f51459c8bd6f";
export const url=new URL("../icons/multicooker-fill.svg?v=8045727e18801d573be500f6a6455e497459cde2e40563eb87414578b696d6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
