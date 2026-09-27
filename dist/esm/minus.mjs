export const name="minus";
export const id="dl_ad8b49287b72486ab025";
export const url=new URL("../icons/minus.svg?v=e5fdfbbb99bde6d65952db1ad69b63eeda0540e81a0b41d829b9745b8e0ab9ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
