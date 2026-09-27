export const name="coda-logo-thin";
export const id="dl_fa6b789ce2b244d2a0ed";
export const url=new URL("../icons/coda-logo-thin.svg?v=0368299c79098a7ce3aae1e10c4629d77411c21d29c00ca65ecfaafcab2805a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
