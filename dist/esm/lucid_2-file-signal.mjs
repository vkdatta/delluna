export const name="lucid_2-file-signal";
export const id="dl_2a9cf0bc79844ffa8059";
export const url=new URL("../icons/lucid_2-file-signal.svg?v=36b8748207962c7bdba9a8a4d4683a0fa99003c46927a3223e68a47b8a603459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
