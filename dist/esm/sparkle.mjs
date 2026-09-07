export const name="sparkle";
export const id="dl_a591213d594442ebbd86";
export const url=new URL("../icons/S/sparkle.svg?v=9e2c17a26564098cb48dd95737a83c742156f755f13cedaa30f9d864d0e3eb76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
