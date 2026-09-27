export const name="presentation-light";
export const id="dl_175552113af34bcf8339";
export const url=new URL("../icons/presentation-light.svg?v=37a4e4f98a5063051bcbb2b63c3996678bf3a1b68e03d43ba64a1a1a2d48619e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
