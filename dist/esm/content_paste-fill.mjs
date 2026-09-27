export const name="content_paste-fill";
export const id="dl_4002dca5179f1f430968";
export const url=new URL("../icons/content_paste-fill.svg?v=bc08931de74c475dc26972a85e7e7a1a365f0c4e317ee5bba36fb70c7a78c28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
