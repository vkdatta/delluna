export const name="sunset";
export const id="dl_bdd1bed5768240b9ada5";
export const url=new URL("../icons/sunset.svg?v=a10867669717d5dd296f19e39794d286bc6b3c63c1e3411810a89485b44062ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
