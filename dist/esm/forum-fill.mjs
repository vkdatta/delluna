export const name="forum-fill";
export const id="dl_e60b412e8a09fabb2bf3";
export const url=new URL("../icons/forum-fill.svg?v=4a523452b3509163a90223058e78946ecfd014cdec40ad8f1d6be116e87e131c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
