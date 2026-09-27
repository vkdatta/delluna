export const name="widget_small-fill";
export const id="dl_e0b6171366b95856ecf8";
export const url=new URL("../icons/widget_small-fill.svg?v=5b8ebc035a323ee6c2d17ea5beb86f7de5dd18b518367e367944827e230fa0f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
