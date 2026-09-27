export const name="notion-logo-fill";
export const id="dl_52985aba6af549138314";
export const url=new URL("../icons/notion-logo-fill.svg?v=86c10c5da363531fa22a079dc391c27b49cc9394203d2ffb294a2d492e2c279d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
