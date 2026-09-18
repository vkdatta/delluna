export const name="text_rotate_vertical-fill";
export const id="dl_2fd3e65ff8394418bb07";
export const url=new URL("../icons/text_rotate_vertical-fill.svg?v=e903cfa03c8036bb88b66e4d0cf09b98fa527f9b3d46bab673ac3ff9d32e97da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
