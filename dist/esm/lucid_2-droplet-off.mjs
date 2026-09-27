export const name="lucid_2-droplet-off";
export const id="dl_83fadfeac4b64cb0bf08";
export const url=new URL("../icons/lucid_2-droplet-off.svg?v=91a9efccba42f0bf7fdde5d4f89548c170f7de21b7073d974e2d76b38f675d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
