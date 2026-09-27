export const name="format_textdirection_vertical";
export const id="dl_fac1338149943c0c22eb";
export const url=new URL("../icons/format_textdirection_vertical.svg?v=752af6707fd92c323321d4dd2f12789d4c8a879ad0d339bde1da228525d2666f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
