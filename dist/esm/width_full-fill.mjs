export const name="width_full-fill";
export const id="dl_b8d195efaa8d4fa49182";
export const url=new URL("../icons/width_full-fill.svg?v=8002de542a03768296f7002e301962e793e73701da730a59f0e41f129db81cb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
