export const name="lucid_2-heater";
export const id="dl_c8ca655216804d58bbc5";
export const url=new URL("../icons/lucid_2-heater.svg?v=fadff4eed2ed80e0f7a1aa256530205bbe48162d90f1245bf83876241e646b67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
