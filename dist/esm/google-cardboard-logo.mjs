export const name="google-cardboard-logo";
export const id="dl_1484685f74974790b9ab";
export const url=new URL("../icons/google-cardboard-logo.svg?v=648b4efc6873491bbbd742175806f6f569c4e8321b552274cb190b15948568a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
