export const name="traffic-cone-duotone";
export const id="dl_69fbf2f930f44d0c9c57";
export const url=new URL("../icons/T/traffic-cone-duotone.svg?v=0a4efb2bbebf33e0f46a6a3152ff283f457df77f7c4ba3189cc16c8b6fb53eb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
