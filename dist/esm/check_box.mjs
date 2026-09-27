export const name="check_box";
export const id="dl_3b77cf7e168d1c8e250e";
export const url=new URL("../icons/check_box.svg?v=4e03ecfbf84b59b984d4c7dce46210e1ce90b1319ebd1fa14b8586ac580eab73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
