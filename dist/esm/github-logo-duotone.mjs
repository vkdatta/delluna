export const name="github-logo-duotone";
export const id="dl_afde04b2b0b14a19a1d6";
export const url=new URL("../icons/github-logo-duotone.svg?v=e5cad1ca4d6cd2c3b04b70aae0608945ef6ca89de9f9ee1f8d44dc9015d8601d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
