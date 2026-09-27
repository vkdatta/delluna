export const name="chevron_right";
export const id="dl_70cd1c7ec4b0b46102f8";
export const url=new URL("../icons/chevron_right.svg?v=a4e4d93e2b25f113063f441d62264e6e127e812964481fc09f55941a6db3a377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
