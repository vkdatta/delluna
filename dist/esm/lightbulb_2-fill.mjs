export const name="lightbulb_2-fill";
export const id="dl_681a98204aa554883e66";
export const url=new URL("../icons/lightbulb_2-fill.svg?v=ae471efaf7aec169b779ee9fbef7179d669f4a9e10f478d4cdb5dd5c04265aa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
