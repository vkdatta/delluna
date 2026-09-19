export const name="grok";
export const id="dl_f0f0c6ceaf8143c0a442";
export const url=new URL("../icons/grok.svg?v=6457f0782ce50676ce98000da64fa2e6d4352ba9d2c18dd37feea8b48be86ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
