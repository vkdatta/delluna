export const name="lucid_2-mail-x";
export const id="dl_cf1e9b2104c242bd99ec";
export const url=new URL("../icons/lucid_2-mail-x.svg?v=a63c132f59d9979db8049f3a3ea144399f57395289e262efa595ea4b2196e650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
