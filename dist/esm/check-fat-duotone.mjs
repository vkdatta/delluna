export const name="check-fat-duotone";
export const id="dl_e5d94e8554d64705ba87";
export const url=new URL("../icons/check-fat-duotone.svg?v=a2493c0cee80750441687033f7f28ac0115cc9ab10494c18c654aed65cb433ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
