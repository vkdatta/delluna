export const name="lucid_2-heading-5";
export const id="dl_b084ac4a5e5b4c259dcc";
export const url=new URL("../icons/lucid_2-heading-5.svg?v=04c4d839abe0069736b361ad7dff2d1751598c83fbcabbf3f2f5f3fe54cbd30b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
