export const name="lucid_3-message-square-code";
export const id="dl_6892ff6163fa4086aaee";
export const url=new URL("../icons/lucid_3-message-square-code.svg?v=7a531b1a99c069825e547ae771692f563407a018cf7302ad6a66a226ca474ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
