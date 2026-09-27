export const name="add_notes-fill";
export const id="dl_2c3087d469b3f8051046";
export const url=new URL("../icons/add_notes-fill.svg?v=417e9a66cc792250ea909fe060556b45cf198e51567078c270b440c1b589c62a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
