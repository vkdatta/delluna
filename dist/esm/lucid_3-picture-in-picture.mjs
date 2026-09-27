export const name="lucid_3-picture-in-picture";
export const id="dl_82dcf802705a40499044";
export const url=new URL("../icons/lucid_3-picture-in-picture.svg?v=7e3ab08d947e3df3e107f0343a0fbdf510c7247e89389af6e723b3f7802a3c82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
