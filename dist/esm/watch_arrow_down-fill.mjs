export const name="watch_arrow_down-fill";
export const id="dl_5498d8fdb57c0fd4179c";
export const url=new URL("../icons/watch_arrow_down-fill.svg?v=24ca76f46050e4c7802e9f018ae48845f7fb3deff542444c8aea940d12e58bc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
