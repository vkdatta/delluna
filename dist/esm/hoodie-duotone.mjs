export const name="hoodie-duotone";
export const id="dl_654828b44a15493e83a8";
export const url=new URL("../icons/hoodie-duotone.svg?v=656ad8263c6f18fa58b5b7f69868527e6efae813e58cc8223576c5e5ee2f6f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
