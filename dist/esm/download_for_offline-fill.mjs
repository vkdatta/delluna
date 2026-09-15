export const name="download_for_offline-fill";
export const id="dl_a6deb70447df446795ac";
export const url=new URL("../icons/D/download_for_offline-fill.svg?v=91adbf0b1d63f8a98a9bd2c9095e23f47a7b05a04eb0b6026cfe40fdd26f4717",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
