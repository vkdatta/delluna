export const name="view_day";
export const id="dl_0b12f3c705f14f2547b1";
export const url=new URL("../icons/view_day.svg?v=ec31e2e464f2eed99ce1e543e8926e3e4b8eea4a9a9aadf928672d5f9798f9cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
