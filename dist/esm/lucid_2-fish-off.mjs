export const name="lucid_2-fish-off";
export const id="dl_cffa62915b7541d59dcd";
export const url=new URL("../icons/lucid_2-fish-off.svg?v=a7082f029139294c51e095c3ed28f48b0d0992ae166853f1dbdb993ec5d785ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
