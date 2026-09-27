export const name="settings_panorama";
export const id="dl_c58a6d74cbb4f9e84f5d";
export const url=new URL("../icons/settings_panorama.svg?v=2381c0431628a9c5543049e866cbb28f2faf9529fe8c590084a4b6a5edf33b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
