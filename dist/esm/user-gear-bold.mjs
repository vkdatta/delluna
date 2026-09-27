export const name="user-gear-bold";
export const id="dl_b3b14dd1d0e228794f77";
export const url=new URL("../icons/user-gear-bold.svg?v=cc901c921fbec19e60a544de18cda90956550047891642a7df5a63b416d8584b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
