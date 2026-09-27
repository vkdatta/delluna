export const name="less-than-or-equal-bold";
export const id="dl_ceee8d7a6fff44848137";
export const url=new URL("../icons/less-than-or-equal-bold.svg?v=73fad16cc5c227714049a731d69e7ae34e4947a9087350b228c513e7df8bb297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
