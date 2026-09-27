export const name="shield_moon";
export const id="dl_1b5f283924053eb132bb";
export const url=new URL("../icons/shield_moon.svg?v=a997fee16ce2afa9fb918a531972da765971fce292dd20c79f8b162284f208f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
