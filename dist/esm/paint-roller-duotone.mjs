export const name="paint-roller-duotone";
export const id="dl_4599b234b2fc40b2873d";
export const url=new URL("../icons/paint-roller-duotone.svg?v=45bc006b7935a75420ded12c9cffe5abfb95fc5a3e2b2a03a542c98449efe560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
