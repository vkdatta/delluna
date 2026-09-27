export const name="lucid_3-rotate-3d";
export const id="dl_ce9112d62ff64fc1a47d";
export const url=new URL("../icons/lucid_3-rotate-3d.svg?v=e2592e98a02d50ba0340ad75f9ca97c9ed331132270b3c740cea1d63161fa78e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
