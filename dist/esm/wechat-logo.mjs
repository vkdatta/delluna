export const name="wechat-logo";
export const id="dl_9cbc411ba1034956abab";
export const url=new URL("../icons/W/wechat-logo.svg?v=4a9313d434a8dbf35199a6dfa47cbdefea59d0faf072d1fdbc0ceffadfb15283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
