export const name="lucid_3-message-circle-heart";
export const id="dl_3a6e94e4b72440059e66";
export const url=new URL("../icons/lucid_3-message-circle-heart.svg?v=f5cdb6945c99b53ebdade68160ea00fc26975314f7c288b939a1eff1827c1038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
