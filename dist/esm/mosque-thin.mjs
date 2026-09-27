export const name="mosque-thin";
export const id="dl_5faacef3cbe4454d8459";
export const url=new URL("../icons/mosque-thin.svg?v=120e7e2408d6362f401afc927cd54809a2e5edc1fb46575dbe0c23a0483a4380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
