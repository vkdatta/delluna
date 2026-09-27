export const name="meta-logo-bold";
export const id="dl_245fc7df52bf4375afb5";
export const url=new URL("../icons/meta-logo-bold.svg?v=56291bb517bcd3f9759049f2665e336505ce4abf802456f3980801eebb062a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
