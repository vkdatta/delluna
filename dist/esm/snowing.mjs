export const name="snowing";
export const id="dl_630afef6ef74f0a038d5";
export const url=new URL("../icons/snowing.svg?v=ddd9a5810576407ce360667a798a2e446499e032563eefd6818624b635a8730c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
