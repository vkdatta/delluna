export const name="watch_off-fill";
export const id="dl_ba8f886728d7b8dbc96e";
export const url=new URL("../icons/watch_off-fill.svg?v=dceef64e8b6c9d550d137a92b7b4c799d97ca7f33544972fdac09ddfdf561c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
