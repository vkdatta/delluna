export const name="dice-five-thin";
export const id="dl_2346f9883b2a440e8f99";
export const url=new URL("../icons/dice-five-thin.svg?v=56eb515a7956820409f2c8fbecdbf5f59fa3cc1eae181844baccaebbd797a748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
