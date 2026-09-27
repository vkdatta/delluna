export const name="lucid_3-rocket";
export const id="dl_cca799e75e2f4afcaa05";
export const url=new URL("../icons/lucid_3-rocket.svg?v=950c60ae50665fd6881d2c88a9f22054ea6459d97e38fb8b03e180caf0f779f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
