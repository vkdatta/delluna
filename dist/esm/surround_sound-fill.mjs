export const name="surround_sound-fill";
export const id="dl_8a4b1c891b0d44b4b148";
export const url=new URL("../icons/surround_sound-fill.svg?v=96408d433aedf05838cfc6c5b32d3c9d10783a7daf01c66db2221909037c1ea5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
