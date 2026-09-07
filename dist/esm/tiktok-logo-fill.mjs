export const name="tiktok-logo-fill";
export const id="dl_275ee5a4bc4b46d99b95";
export const url=new URL("../icons/T/tiktok-logo-fill.svg?v=aafb59c3c1902035736bc955e1b4485e46fd8b633bb2cd2e046937cc1b26c5cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
