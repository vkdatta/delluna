export const name="wechat-logo-light";
export const id="dl_f10803e6d150965d3113";
export const url=new URL("../icons/wechat-logo-light.svg?v=143b796bd63707d38fab47625260e9bc35c8d7b30e45a68797050a61d16e8447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
