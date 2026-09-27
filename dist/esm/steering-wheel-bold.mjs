export const name="steering-wheel-bold";
export const id="dl_14349ab79c5c54db50ad";
export const url=new URL("../icons/steering-wheel-bold.svg?v=4b8a3869df003092a29c46521f0bc6e66b031d9d5fa48746f590728385cd541b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
