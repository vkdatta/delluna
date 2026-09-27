export const name="dice-four-bold";
export const id="dl_699e112982bc407ab0d4";
export const url=new URL("../icons/dice-four-bold.svg?v=b3958e3d5f01d5982807d98b36c59f92a99f6b2027d31ee2d597e054db7ac8ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
