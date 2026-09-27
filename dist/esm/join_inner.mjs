export const name="join_inner";
export const id="dl_f355bc30e6f04d2d4a79";
export const url=new URL("../icons/join_inner.svg?v=cfc599b798a9d7a97d93f24d6e990c13648ddd10e6e4e89eb08ae74ba3e301b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
