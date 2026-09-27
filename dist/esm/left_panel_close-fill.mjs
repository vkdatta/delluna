export const name="left_panel_close-fill";
export const id="dl_a2cb67f9ac57ca5c1c8f";
export const url=new URL("../icons/left_panel_close-fill.svg?v=2e98659cd104280eb63004780ab0cac9616ba6af5418c0939e3fdb2ac34ec8f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
