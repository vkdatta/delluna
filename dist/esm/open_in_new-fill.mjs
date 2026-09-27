export const name="open_in_new-fill";
export const id="dl_a2f8c4b94ab62548eae4";
export const url=new URL("../icons/open_in_new-fill.svg?v=c4c5c1c09664a5977bae796d0c4b4ad925a4e6537c9f54c9ae9a0a5e647a4d2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
