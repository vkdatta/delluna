export const name="lucid_3-octagon-minus";
export const id="dl_621b9d769a2e4b338647";
export const url=new URL("../icons/lucid_3-octagon-minus.svg?v=3eb4c87d62a2c6d86601bff584a34fe6464de522c563d36e906a31f764a38968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
