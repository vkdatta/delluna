export const name="watch_arrow_down";
export const id="dl_691c829d86304eeca844";
export const url=new URL("../icons/watch_arrow_down.svg?v=9d828a86da5c1609173a1ecaecc771a4af641022acbfb14d44fda905d5a4e3a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
