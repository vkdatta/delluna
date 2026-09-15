export const name="carry_on_bag_inactive-fill";
export const id="dl_d9bd10a9f64c493c9c1f";
export const url=new URL("../icons/C/carry_on_bag_inactive-fill.svg?v=5f8fb9c577fab79bdf7f5c078b8b48d522b80f5fe30b92aaa95913ad38bad971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
