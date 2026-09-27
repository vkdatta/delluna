export const name="cards-bold";
export const id="dl_2926dd68739d4d39991a";
export const url=new URL("../icons/cards-bold.svg?v=e75dea70fc40ce11e85add3f392d5d98461d2ee7ac4210284a1451666c72d42d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
