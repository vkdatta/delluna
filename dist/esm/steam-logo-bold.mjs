export const name="steam-logo-bold";
export const id="dl_fe5cc44e09e0cddd5251";
export const url=new URL("../icons/steam-logo-bold.svg?v=238557700318c4afad1645c029f2bc2f8e0d378c3feb922179a9b98b5ca56fdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
