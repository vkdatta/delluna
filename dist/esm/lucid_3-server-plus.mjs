export const name="lucid_3-server-plus";
export const id="dl_c9b130d490584801b158";
export const url=new URL("../icons/lucid_3-server-plus.svg?v=8b97205faf2d51af4c5107c9de67d1d090c5bf7200fcb5f4a81e1e66743f883d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
