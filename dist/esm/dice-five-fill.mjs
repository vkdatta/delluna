export const name="dice-five-fill";
export const id="dl_c4c740f46f1d4c8cb0bd";
export const url=new URL("../icons/dice-five-fill.svg?v=d07af4297d64055d994558a88383bf31cf70a46d356a5b90e287a4488e642b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
