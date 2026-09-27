export const name="lucid_2-map-pin-check";
export const id="dl_440ebe6c8db04fa5bb56";
export const url=new URL("../icons/lucid_2-map-pin-check.svg?v=22053098d3592c49709c478ce7d4586abcf3b92c9c349d8f2f9b8b211ae9db76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
