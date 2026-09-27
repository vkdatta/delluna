export const name="do_not_touch-fill";
export const id="dl_ed513200dd64778d8502";
export const url=new URL("../icons/do_not_touch-fill.svg?v=c63de1dadb110ac7d7a5a4e021261ba8beddee66d37376d74e6987c9c8800e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
