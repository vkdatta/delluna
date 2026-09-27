export const name="hourglass";
export const id="dl_fd8cb74a330b48ca84a3";
export const url=new URL("../icons/hourglass.svg?v=fd5c91a18ca00115c8c8b4e9388db96a8e31444e69833794b104df6b31c270df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
