export const name="fediverse-logo-fill";
export const id="dl_828d09c0423a4b7b8844";
export const url=new URL("../icons/fediverse-logo-fill.svg?v=f498e221910387fb8f2c13e05c86adfedfca2da00051c06da7788c9e08d89bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
