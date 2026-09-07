export const name="sun-dim-thin";
export const id="dl_03c11f314ff1432ea3a3";
export const url=new URL("../icons/S/sun-dim-thin.svg?v=18c8ada3e8bdc58c8b77c3a7f12cda5f692b2333ce28a64006f662bd9826319d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
