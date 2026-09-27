export const name="twitch-logo-fill";
export const id="dl_24ac8f9fa2e1ebeaebb8";
export const url=new URL("../icons/twitch-logo-fill.svg?v=5be2d5238360a7391c71dd728140a041f75338a2a5c02db3c800fdab501eb858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
