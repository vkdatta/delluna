export const name="currency-rub-thin";
export const id="dl_635c87a5f1144ea88346";
export const url=new URL("../icons/currency-rub-thin.svg?v=56d7d22fb726e443d4df64e9c92927188eb68508e076d5ec2eb652520b553226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
