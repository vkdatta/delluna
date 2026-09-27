export const name="bath_outdoor";
export const id="dl_88e6a8c08043b91998d1";
export const url=new URL("../icons/bath_outdoor.svg?v=64f7b94715375ed9d49708fc8451e6b65a09ca4544897ae3fb813ed48f1d6f73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
