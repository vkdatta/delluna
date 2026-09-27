export const name="watch_button";
export const id="dl_363c41565eaacc1e7de1";
export const url=new URL("../icons/watch_button.svg?v=aa969f7e10ef7bd67d83e1e59e50ffd0af69a3bebe071b1f9f36e8b66c521249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
