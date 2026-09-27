export const name="phone_in_talk-fill";
export const id="dl_c8dda0d85b4699ab9423";
export const url=new URL("../icons/phone_in_talk-fill.svg?v=9822a205a280e96dbff5213f53799b2695761b4477ceec3e12b3f9d27feeb1e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
