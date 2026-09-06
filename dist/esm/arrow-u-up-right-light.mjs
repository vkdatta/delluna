export const name="arrow-u-up-right-light";
export const id="dl_bca35b4a1dba47888b53";
export const url=new URL("../icons/arrow-u-up-right-light.svg?v=66957bd344b9e1d207267f67f2dd2fbe86d5f638954e6981168a11694cbf175d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
