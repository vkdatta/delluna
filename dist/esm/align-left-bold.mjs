export const name="align-left-bold";
export const id="dl_a5e8f3742f7b4f1daa82";
export const url=new URL("../icons/align-left-bold.svg?v=7e5d724dfc135948f899f48ebba1cbcbd82533b2fecb0b5ac24adf7f4164eaa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
