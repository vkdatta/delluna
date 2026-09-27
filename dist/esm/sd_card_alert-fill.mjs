export const name="sd_card_alert-fill";
export const id="dl_a6dc86b90b53c5749bb0";
export const url=new URL("../icons/sd_card_alert-fill.svg?v=ce1227edd5126375706f0bccc9463ea07db49965156785fcba17967225809f05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
