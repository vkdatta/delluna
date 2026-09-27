export const name="next_week";
export const id="dl_712146623f14480b7422";
export const url=new URL("../icons/next_week.svg?v=31f3c000ae6f78b99978aad6b90985f7f01db831c07a17159759277c3d01fcc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
