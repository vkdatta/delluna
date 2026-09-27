export const name="hdr_off_select";
export const id="dl_ed194659cb6af1adf4d4";
export const url=new URL("../icons/hdr_off_select.svg?v=d064941f60b536b7de24d2229526aed3a28d549991f328bc06bf751c23c3cc90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
