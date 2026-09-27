export const name="slideshow-duotone";
export const id="dl_8ccf79c3f6be1e2b3e3c";
export const url=new URL("../icons/slideshow-duotone.svg?v=3da0aa143fe700249f3692f8b4391ead07b893eb99048d10aa5e269b28b1e8a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
