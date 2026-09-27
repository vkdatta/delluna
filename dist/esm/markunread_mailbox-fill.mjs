export const name="markunread_mailbox-fill";
export const id="dl_f5cdf8fc6e396bc3ee05";
export const url=new URL("../icons/markunread_mailbox-fill.svg?v=9cb1991db89d935063b562ba218dc21dd914f2d6d40830286b822994a9ea11e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
