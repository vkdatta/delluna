export const name="format_bold-fill";
export const id="dl_f04807c7e7334e84b0c0";
export const url=new URL("../icons/F/format_bold-fill.svg?v=a7a1398ec1d57394ce7acec4241f514732544f09c57071a0b8d515c46b0fca69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
