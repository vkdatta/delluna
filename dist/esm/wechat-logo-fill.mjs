export const name="wechat-logo-fill";
export const id="dl_2db128d2c0624febaf8f";
export const url=new URL("../icons/W/wechat-logo-fill.svg?v=d21eea391d7b4eea7ebd692cd362441e59995515073935b184cf00af0c3f084e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
