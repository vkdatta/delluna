export const name="inbox";
export const id="dl_b9023d63ecc649fb9379";
export const url=new URL("../icons/inbox.svg?v=e437a190c31380930df778f113efc5d1c66300253d9bb9f5b00317d430a30f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
