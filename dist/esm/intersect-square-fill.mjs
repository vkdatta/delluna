export const name="intersect-square-fill";
export const id="dl_0f65004866e1489589e2";
export const url=new URL("../icons/intersect-square-fill.svg?v=c51a48e1b2d167e3bb49f08f2168c1045ef4f05b64bad4264f59bff3a81f9575",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
