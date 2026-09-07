export const name="truck-thin";
export const id="dl_a0a96fd13ec44265b6e9";
export const url=new URL("../icons/T/truck-thin.svg?v=d0cb2beac7efaf5e08c93ec7b1a437288feff9bd71f68d0ef2479ef9c2a1ee4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
