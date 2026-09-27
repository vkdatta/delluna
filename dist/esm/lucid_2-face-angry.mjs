export const name="lucid_2-face-angry";
export const id="dl_05b37c58c8db4aebbe2c";
export const url=new URL("../icons/lucid_2-face-angry.svg?v=5c3d5fc0fcd31a7bcb21ef31460d93af00589e1c3d430b196fbebe0d54aaf594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
