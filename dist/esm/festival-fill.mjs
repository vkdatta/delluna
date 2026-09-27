export const name="festival-fill";
export const id="dl_e93939b22ba97258b143";
export const url=new URL("../icons/festival-fill.svg?v=825f8665c63c123674ed20dd0aa61bef6c67515535ea88cf580010979ae0fb6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
