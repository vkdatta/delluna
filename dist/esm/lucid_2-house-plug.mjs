export const name="lucid_2-house-plug";
export const id="dl_6afc69ce5ce74f71bb2b";
export const url=new URL("../icons/lucid_2-house-plug.svg?v=349d48d74d64fe425c5a8ec786e5b382660eb79765e17f9e39a54d9708644d92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
