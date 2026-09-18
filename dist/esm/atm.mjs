export const name="atm";
export const id="dl_11ddccdd465e4078bb68";
export const url=new URL("../icons/atm.svg?v=8f3648bf0c08b342a37358429bd265add12afc5f6ee6e5dec6885b264747fd58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
