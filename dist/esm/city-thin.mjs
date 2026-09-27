export const name="city-thin";
export const id="dl_148bac173f114714bf62";
export const url=new URL("../icons/city-thin.svg?v=4b695a4cc3f70688386e2a04aef9fda1354b6658ee85024b9c5a7c6dceba49d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
