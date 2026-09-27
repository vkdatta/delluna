export const name="dice-six-fill";
export const id="dl_b5f25e556e634eccbe1a";
export const url=new URL("../icons/dice-six-fill.svg?v=67ba09eb3093cea7ea720ca025f575138f1217f2cbc84e5a51cb7bae12d21330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
