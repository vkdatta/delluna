export const name="pinwheel-thin";
export const id="dl_3c268ecc7c21403d9748";
export const url=new URL("../icons/pinwheel-thin.svg?v=34eb24978a0a4d9cfc1d8d9871869f19336eecd45cb9d1a8ac998509a3c5ee8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
