export const name="sensors-fill";
export const id="dl_459af96972ba46a6a594";
export const url=new URL("../icons/S/sensors-fill.svg?v=51d734b00ec5b67d044cfe1becbd38f891b6e2a6d8a99e875acd51f204860024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
