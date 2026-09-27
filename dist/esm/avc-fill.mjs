export const name="avc-fill";
export const id="dl_eee85bab9a2b8edc41fc";
export const url=new URL("../icons/avc-fill.svg?v=e18501ce13e23d6466a9f49b5f9b208b85ff2ac56b85007351ef46a7bab4492c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
