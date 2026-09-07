export const name="tidal-logo-duotone";
export const id="dl_01ad5fa3e1444a919ee8";
export const url=new URL("../icons/T/tidal-logo-duotone.svg?v=55a67fd4e5289bb9fbc4bb9e6d154f0d42b14d5a9f3f1a502c6fda3a9872258d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
