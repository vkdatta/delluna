export const name="square-half-bottom-duotone";
export const id="dl_e85a9e76fb2818ead3a8";
export const url=new URL("../icons/square-half-bottom-duotone.svg?v=91ce76e56eccb159f84219f0a5240cde1b2de4dca4d14b68c1f63afb76b92f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
