export const name="account_balance-fill";
export const id="dl_ce5f40f1da3144ce8288";
export const url=new URL("../icons/account_balance-fill.svg?v=ec2cc155c651d642ba338b6946ff738ed19c883fa03a3f9fed4d367dab61fff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
