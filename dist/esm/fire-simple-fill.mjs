export const name="fire-simple-fill";
export const id="dl_3bf444577b0e46049ddb";
export const url=new URL("../icons/fire-simple-fill.svg?v=4cfe614e9ae9ed97084eea9fb675586f1fb1b81354d3b5c9f432aaf84c5c1f8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
