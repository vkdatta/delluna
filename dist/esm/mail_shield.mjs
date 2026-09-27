export const name="mail_shield";
export const id="dl_864479b0910d48e91cad";
export const url=new URL("../icons/mail_shield.svg?v=fe78c8632059db94a7deb0538664f65b56ebe230b358381fe9bd28813e5ad609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
