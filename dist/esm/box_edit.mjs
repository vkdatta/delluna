export const name="box_edit";
export const id="dl_d611caa802ffc40b256e";
export const url=new URL("../icons/box_edit.svg?v=9aa0e73af36a84b5cae9141176dbf11f7b16c7dc4c2f15b71877f82503e1efb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
