export const name="closed_caption_disabled";
export const id="dl_128bd144036df857c157";
export const url=new URL("../icons/closed_caption_disabled.svg?v=e82abfcb9c304116ca1238e380715d8f6cf2404faafb82807a5bd1b8e845025b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
