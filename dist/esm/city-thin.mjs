export const name="city-thin";
export const id="dl_148bac173f114714bf62";
export const url=new URL("../icons/city-thin.svg?v=9d7ee946f67d170c9392506b25c01dc57c58a02391d56e2b1dc8cfbbc5d95706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
