export const name="pediatrics";
export const id="dl_ef5e30e1555de71a1e5f";
export const url=new URL("../icons/pediatrics.svg?v=1068c163edffb5eea326882a67472522ba8123dd3b9f9811aaf49813db84442c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
