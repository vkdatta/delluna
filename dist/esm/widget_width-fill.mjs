export const name="widget_width-fill";
export const id="dl_0472f46d55f442759cbc";
export const url=new URL("../icons/widget_width-fill.svg?v=5a2ea33d4ebd84896ab4663201e1198c3c6846fb7b62a2f8f95bbb63e208b8f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
