export const name="domain_verification-fill";
export const id="dl_8fe7b5a5b7e928fdaa80";
export const url=new URL("../icons/domain_verification-fill.svg?v=9b9f55b364bd54a94f61e79b995d3b440e119e3b20dfd61b81b36c3fa6549ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
