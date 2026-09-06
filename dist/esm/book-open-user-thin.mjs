export const name="book-open-user-thin";
export const id="dl_ae98eeb22b7b4972816b";
export const url=new URL("../icons/book-open-user-thin.svg?v=27ee378549a62e988484e21b62df90da09e455aabe67fcbdc981fd6ee2d03e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
