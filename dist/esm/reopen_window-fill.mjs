export const name="reopen_window-fill";
export const id="dl_bf747cbe3ef2456f9f64";
export const url=new URL("../icons/reopen_window-fill.svg?v=5bdf079d43a09651866876e6b406d7e60df2b69943469315d5c574f98e1a818e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
