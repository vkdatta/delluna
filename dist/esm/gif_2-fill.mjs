export const name="gif_2-fill";
export const id="dl_154b97ad014fe10a1a52";
export const url=new URL("../icons/gif_2-fill.svg?v=5ab3fd3ca47bd8feadaf0a548a5bd25a73a53ca57addce30c2f09553628b3b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
