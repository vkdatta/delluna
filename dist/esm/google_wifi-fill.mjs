export const name="google_wifi-fill";
export const id="dl_5902b9e9d87a42bcedb3";
export const url=new URL("../icons/google_wifi-fill.svg?v=eebc6583353cc136f683f7fa0bdbe32fabe6f2449f21d0765dd3f3214890aa69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
