export const name="lucid_3-map-pin-plus-inside";
export const id="dl_6ceee32f84b9495e9bcc";
export const url=new URL("../icons/lucid_3-map-pin-plus-inside.svg?v=0b784728e16949a73f288a2dcf4c10fbe4a5219ff07c6f8ebbdf6f2e7813c60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
