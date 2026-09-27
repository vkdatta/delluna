export const name="bubbles-fill";
export const id="dl_a92c2d24e91eafd1c080";
export const url=new URL("../icons/bubbles-fill.svg?v=c128eed436a07d307422ccc2e932d29262852ba421a274b8f50e5c3dfa24665a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
