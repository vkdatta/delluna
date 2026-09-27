export const name="lucid_2-droplet-off";
export const id="dl_83fadfeac4b64cb0bf08";
export const url=new URL("../icons/lucid_2-droplet-off.svg?v=ec3fb1a260e12e160db39e86b26bc8cb4134c01e92d613876bbe159f25c6989c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
