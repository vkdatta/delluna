export const name="arrow-u-up-right-fill";
export const id="dl_2e8e933873b94d75b4b7";
export const url=new URL("../icons/arrow-u-up-right-fill.svg?v=c782d52e680aa4dd01d847ae0125d94dba169ba293412ea468e1e6ca1f2fae00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
