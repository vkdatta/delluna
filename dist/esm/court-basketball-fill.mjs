export const name="court-basketball-fill";
export const id="dl_b47d4c5bb7bc4206a30f";
export const url=new URL("../icons/court-basketball-fill.svg?v=3035af54de8882984e2475e47cb1e813f0e7aa46a8eb098c3056c6a7a690da57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
