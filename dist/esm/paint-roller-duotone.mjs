export const name="paint-roller-duotone";
export const id="dl_4599b234b2fc40b2873d";
export const url=new URL("../icons/paint-roller-duotone.svg?v=4c44ebbfcdd16a7b30fdd984ee118c42f6c6d84f06faf0a78ee7d50cec697286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
