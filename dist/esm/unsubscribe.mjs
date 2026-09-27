export const name="unsubscribe";
export const id="dl_c999edec89709b9596ea";
export const url=new URL("../icons/unsubscribe.svg?v=aa6df833cf665ee046c49e6f273d5502e5377603305fe7579fc79e917f33c610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
