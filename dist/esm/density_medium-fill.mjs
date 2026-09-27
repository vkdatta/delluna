export const name="density_medium-fill";
export const id="dl_621cb2c470b45eab421b";
export const url=new URL("../icons/density_medium-fill.svg?v=e0436db3c134dcb2b7b668530a5bce7bde2162fe0c6b305762132f767cdb2829",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
