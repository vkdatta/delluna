export const name="voting_chip";
export const id="dl_a4f17e9d83e15e1ef8d0";
export const url=new URL("../icons/voting_chip.svg?v=e241ab359094f4cb2b700b9246556b22d9fbe92538e7abdab88cb0bc8522134d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
