export const name="keyboard_double_arrow_down-fill";
export const id="dl_4e098dbcccac3c6386b6";
export const url=new URL("../icons/keyboard_double_arrow_down-fill.svg?v=9f281bf24eab855270d27d8ca12df5ca5ee414f419af7f52fa73b8c29e2062bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
