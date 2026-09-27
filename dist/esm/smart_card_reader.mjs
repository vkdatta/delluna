export const name="smart_card_reader";
export const id="dl_ac38bac58e2d9aed8871";
export const url=new URL("../icons/smart_card_reader.svg?v=3bedd87347df7b953484e0fb6f7744300014bb06694992357592de1ea1695c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
