export const name="smart_card_reader_off-fill";
export const id="dl_1f42f283d75768caacd5";
export const url=new URL("../icons/smart_card_reader_off-fill.svg?v=f81aa521ce093bd22259af32664c852ba5c571777ffb4498355c7bb5dd78fdaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
