export const name="right_panel_close-fill";
export const id="dl_04e1977f4b300cd05867";
export const url=new URL("../icons/right_panel_close-fill.svg?v=aa9901b5ad1b583bddaccb81513da38c28be9ea72e2b0ac4e570330094599f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
