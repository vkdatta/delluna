export const name="universal_currency";
export const id="dl_6df5ae22db2645eb9b57";
export const url=new URL("../icons/U/universal_currency.svg?v=41ff46dc6430bc4d6c3ed686a9994fe86eaf607b0fddb3ee920be4318aa3ae56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
