export const name="wechat-logo";
export const id="dl_0fb6c24d166777332d27";
export const url=new URL("../icons/wechat-logo.svg?v=9430d8cda2e83b9a1e00c80616b87c9cb6db7b05cdc34ca804ac94597148395f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
