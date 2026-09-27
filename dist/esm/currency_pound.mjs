export const name="currency_pound";
export const id="dl_3990460bea4b8c88c4bc";
export const url=new URL("../icons/currency_pound.svg?v=33cecc07b93dfd67a8dcde1187c62b78b7f4971fa78f72f672afc9ab662d90f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
