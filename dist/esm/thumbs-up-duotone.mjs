export const name="thumbs-up-duotone";
export const id="dl_a969e1c82edfc765b4b3";
export const url=new URL("../icons/thumbs-up-duotone.svg?v=1a07aff45a0885e545714480e5c669e99414c54aafb766054a3e6a4cf8e39022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
