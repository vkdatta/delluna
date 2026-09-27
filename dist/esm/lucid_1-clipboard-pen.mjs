export const name="lucid_1-clipboard-pen";
export const id="dl_ef23a269338d47d19922";
export const url=new URL("../icons/lucid_1-clipboard-pen.svg?v=8aaa775ac5222578b317d1777474a00e1c8db5caee9050e4d85c74dbc7cf9b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
