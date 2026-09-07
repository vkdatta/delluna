export const name="trademark-registered-light";
export const id="dl_80ae8a4367394f62bfe6";
export const url=new URL("../icons/T/trademark-registered-light.svg?v=7abe92ad0f2c73f5d6e410464d69eccf74563816d8838fa6fe1f1afbb637d171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
