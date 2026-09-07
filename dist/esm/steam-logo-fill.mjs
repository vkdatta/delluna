export const name="steam-logo-fill";
export const id="dl_4e7503f07d834bd89599";
export const url=new URL("../icons/S/steam-logo-fill.svg?v=1715fdfe47e32c6cbff76fd80dcb47c1e5a704b2067412dd64dff20b8d802a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
