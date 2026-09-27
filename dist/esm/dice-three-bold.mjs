export const name="dice-three-bold";
export const id="dl_95868066f92c46dbac8d";
export const url=new URL("../icons/dice-three-bold.svg?v=8347d013468b67fa00349308575311ea3ce83433dd1dfb2c71487927d3870a37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
