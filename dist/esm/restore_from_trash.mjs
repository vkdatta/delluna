export const name="restore_from_trash";
export const id="dl_a03b43f7d793416fa1f9";
export const url=new URL("../icons/R/restore_from_trash.svg?v=e163baa0f35f7fb2991f3456c18f3205f3fd328265b2186752fb05d2647702e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
