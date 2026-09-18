export const name="voice_over_off-fill";
export const id="dl_141ec97ed57b49379f5f";
export const url=new URL("../icons/V/voice_over_off-fill.svg?v=25cd4b8f5fb8b28522e8eb5fc5c1fe105fa03003903cf69436c90dc0e513cd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
