export const name="dice-four-duotone";
export const id="dl_332d53a0a4274f398ae7";
export const url=new URL("../icons/dice-four-duotone.svg?v=c1f13066111cad15fd25d3cb2be4758f4736985b8070ffd52ed0db4ad6dfe00b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
