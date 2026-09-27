export const name="mail-fill";
export const id="dl_80822017fb68598463b8";
export const url=new URL("../icons/mail-fill.svg?v=698a4da0e7ad01da67403b2ba4ea36a25fdabf7d88b3f9b1206dcc02ddb68e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
