export const name="sync_desktop-fill";
export const id="dl_4330029ad2564f268b84";
export const url=new URL("../icons/S/sync_desktop-fill.svg?v=5d7c0b6031202d2094244ff776b5b632b9129c36b1b5fd18f2cab73b1aa00a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
