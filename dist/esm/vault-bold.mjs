export const name="vault-bold";
export const id="dl_717fc8ebb855f596a859";
export const url=new URL("../icons/vault-bold.svg?v=8c28589d4e70df92a3ff0432bbbfaa7aee6af3ca23e76b2da8068fadd05e8f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
