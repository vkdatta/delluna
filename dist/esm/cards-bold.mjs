export const name="cards-bold";
export const id="dl_2926dd68739d4d39991a";
export const url=new URL("../icons/cards-bold.svg?v=fd632f1d78cedc8788bd18a529c9b121ca56d0fa6d7c77877ca13f0cc8fe46d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
