export const name="identification-card";
export const id="dl_71670481f0ab414090e4";
export const url=new URL("../icons/identification-card.svg?v=d1169eaf4b04f77c9542e0b0e8de872afee64c32f9a415567be868a93ba44563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
