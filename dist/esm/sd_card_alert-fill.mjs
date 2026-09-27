export const name="sd_card_alert-fill";
export const id="dl_f1e9f7082302ccaf2713";
export const url=new URL("../icons/sd_card_alert-fill.svg?v=c5ce6af2a28fdf2a02be7e0252808760e9035710d64ce745d1cd5ea24a048afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
