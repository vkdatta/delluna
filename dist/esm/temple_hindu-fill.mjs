export const name="temple_hindu-fill";
export const id="dl_891f92aeaa4e8938eb5c";
export const url=new URL("../icons/temple_hindu-fill.svg?v=564a9441b7f4f7f0220f1a39887e0a0bd66503a6a6fc89348fe8e780c20984c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
