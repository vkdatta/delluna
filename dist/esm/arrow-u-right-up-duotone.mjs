export const name="arrow-u-right-up-duotone";
export const id="dl_d77d1a4eaa664923980e";
export const url=new URL("../icons/arrow-u-right-up-duotone.svg?v=6693cfe690caf01b8bf77d24c557fdc0c911beacd3493c6690df5d88e7307af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
