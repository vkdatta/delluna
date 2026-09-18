export const name="watch_lock-fill";
export const id="dl_846f5da0414348889c1a";
export const url=new URL("../icons/watch_lock-fill.svg?v=a5ab5805a7d3fde6e9122d3cb613fcfc261d6d46a38f0254dbc761bf31eaf5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
