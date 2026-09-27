export const name="clipboard-text";
export const id="dl_8d85692d524f4030bd14";
export const url=new URL("../icons/clipboard-text.svg?v=3b88eb2d8d93fa31149cdf8a3dd13731a5f2eb262c7542a27a94203b56c0f210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
