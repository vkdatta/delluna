export const name="total_dissolved_solids-fill";
export const id="dl_eb27d7fefc6d4bd48972";
export const url=new URL("../icons/T/total_dissolved_solids-fill.svg?v=63d5567d92e0da0fdeeed58f63cd44c9b1337fbc3490e92c0216672898a182ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
