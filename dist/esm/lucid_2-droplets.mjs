export const name="lucid_2-droplets";
export const id="dl_a0fe2834753b4bfdbffc";
export const url=new URL("../icons/lucid_2-droplets.svg?v=3f3ac68b75663cea11b647ea9ba4da9732f1714ca4641382cc00191c29159164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
