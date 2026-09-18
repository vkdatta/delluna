export const name="more_time-fill";
export const id="dl_2866143af10c44698fa6";
export const url=new URL("../icons/M/more_time-fill.svg?v=6c9f59966eb9f74c0b884464e603cfc164183d91acfc7ccccf9e04068b3b2ebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
