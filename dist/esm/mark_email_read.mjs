export const name="mark_email_read";
export const id="dl_216e0ad3ccde81584b9c";
export const url=new URL("../icons/mark_email_read.svg?v=4a3a86f3482e9dada0aa8cbdfd19c477600f57829dda4bf204648a3ab8554f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
