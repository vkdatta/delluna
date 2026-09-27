export const name="lucid_1-cannabis";
export const id="dl_e6e5aabf860144c3806c";
export const url=new URL("../icons/lucid_1-cannabis.svg?v=96d08b0e9c6c1b6c94439e0eb4566b45c0ab4dda459e13a1325ce41f13c8f9e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
