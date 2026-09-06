export const name="lucid_1-compass";
export const id="dl_2685ce46ba2746bdabf7";
export const url=new URL("../icons/lucid_1-compass.svg?v=f2d4e33dc79615500a26244254a65cd8739bfb8499ad67b0d95a90787446885d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
