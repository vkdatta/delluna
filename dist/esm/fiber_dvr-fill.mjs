export const name="fiber_dvr-fill";
export const id="dl_8921fda9c9365d47f418";
export const url=new URL("../icons/fiber_dvr-fill.svg?v=6a67b3bf965f6ac5adbd26bfd1c85c2f7c707ddc6043180b5afc7922d89d39ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
