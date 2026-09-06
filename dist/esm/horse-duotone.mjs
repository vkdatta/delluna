export const name="horse-duotone";
export const id="dl_c445ab8b872f4a7da030";
export const url=new URL("../icons/horse-duotone.svg?v=122624f175a416c8f601df870d75a1851a0e40f3d4b2d5d5c3ec4be340a9c86a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
