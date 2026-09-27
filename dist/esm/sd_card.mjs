export const name="sd_card";
export const id="dl_6855a9daf1a80a0cc26b";
export const url=new URL("../icons/sd_card.svg?v=8edb6ce807376f3dbc10a296bb26d8583320155ec04675350897770ea7c063ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
