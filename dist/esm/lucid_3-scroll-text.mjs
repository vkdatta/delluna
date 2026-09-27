export const name="lucid_3-scroll-text";
export const id="dl_acac7bef925e470e8595";
export const url=new URL("../icons/lucid_3-scroll-text.svg?v=93e3678e38f65b9e6bceaf802d1b5b7843e185b1a2fa717a937e57daca7304ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
