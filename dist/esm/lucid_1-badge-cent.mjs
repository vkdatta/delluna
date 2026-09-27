export const name="lucid_1-badge-cent";
export const id="dl_5275bdc8ac194e33abd9";
export const url=new URL("../icons/lucid_1-badge-cent.svg?v=cd703922ff5eb736682a103e48c8d1d40a4afac1c21e267a10947fb46b38ba87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
