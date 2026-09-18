export const name="open_in_browser-fill";
export const id="dl_00b5f5c4159b4f2f9764";
export const url=new URL("../icons/open_in_browser-fill.svg?v=c0be14dcb4bcdc72287a8a449c10c9e223891a4120aaa248ae31e2a0bf05b3f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
