export const name="lucid_3-scan";
export const id="dl_a1bc98aaf115437d83cb";
export const url=new URL("../icons/lucid_3-scan.svg?v=6581c56bf0999024bbd665d403fd6a975611bbc4ffd710361f0044ea01cc5850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
