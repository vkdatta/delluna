export const name="exclamation-mark-fill";
export const id="dl_8c03f644652f4ecba32f";
export const url=new URL("../icons/exclamation-mark-fill.svg?v=504865aa0592f2d7cbd04aef5aa50cba210ce594cf7dc48d5cd254c1b9a280b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
