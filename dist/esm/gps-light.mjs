export const name="gps-light";
export const id="dl_15aed3071ed34ae5b115";
export const url=new URL("../icons/gps-light.svg?v=98fd309a708d53321580c9bc8827d50593d1e55fe190507ee17973b5f0515331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
