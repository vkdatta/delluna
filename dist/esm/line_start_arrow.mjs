export const name="line_start_arrow";
export const id="dl_802798099ce28aacf737";
export const url=new URL("../icons/line_start_arrow.svg?v=fcb2e63685749d1ca1483d66518d67f3bebc9b14773ae570823ef836ebf06d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
