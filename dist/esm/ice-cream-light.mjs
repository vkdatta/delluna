export const name="ice-cream-light";
export const id="dl_47c8c223c96e4bf2b2d8";
export const url=new URL("../icons/ice-cream-light.svg?v=d92a347a538217d389501d4a0221e0f05d49e3baa7d72eb1de16e1716c0fc2a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
