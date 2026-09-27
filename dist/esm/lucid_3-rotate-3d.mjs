export const name="lucid_3-rotate-3d";
export const id="dl_ce9112d62ff64fc1a47d";
export const url=new URL("../icons/lucid_3-rotate-3d.svg?v=054438e112078de0ef72f8b0497bd4bf703ebf078d860532338c92f367566c0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
