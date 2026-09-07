export const name="caret-circle-double-down-fill";
export const id="dl_cae19b08b88b495e9170";
export const url=new URL("../icons/caret-circle-double-down-fill.svg?v=cf2a73454610c1dfa4eb3ece614cdc0cba8599d2827ef9644561f48bbade2c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
