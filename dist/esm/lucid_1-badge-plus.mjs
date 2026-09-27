export const name="lucid_1-badge-plus";
export const id="dl_43facf343f4e414a98f1";
export const url=new URL("../icons/lucid_1-badge-plus.svg?v=d88e9f755e09d1bc9434a1429a77319c098ad80f39ebd41786ddfef7cf259fd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
