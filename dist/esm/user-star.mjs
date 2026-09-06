export const name="user-star";
export const id="dl_933018c9ed7841a49ef3";
export const url=new URL("../icons/user-star.svg?v=b6a25a87aae0b9dbc61991a66159af19c75becdb2462873cf715714b78949349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
