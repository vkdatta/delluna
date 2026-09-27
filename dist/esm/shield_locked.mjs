export const name="shield_locked";
export const id="dl_eb4fdd242bf5ae944e67";
export const url=new URL("../icons/shield_locked.svg?v=ac352a24c7ae386e72d96bf99da0d5e6d4d85e190245f9f7546143be4db453e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
