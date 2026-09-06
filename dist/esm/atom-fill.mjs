export const name="atom-fill";
export const id="dl_920bf252c6e34775ab50";
export const url=new URL("../icons/atom-fill.svg?v=51f591441c389d14eeba6b0cb02e781949a8da13ce3e26c56121813cb1feecc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
