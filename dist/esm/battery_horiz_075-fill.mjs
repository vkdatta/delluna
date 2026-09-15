export const name="battery_horiz_075-fill";
export const id="dl_8bd1747148934a7892a5";
export const url=new URL("../icons/B/battery_horiz_075-fill.svg?v=1b5b0e634e2dc723fc882c90750c0c5c8f0abcc4f4a956bfb0dd26dec2fab7cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
