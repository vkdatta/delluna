export const name="cheers-duotone";
export const id="dl_17376eb6ceee4a919544";
export const url=new URL("../icons/cheers-duotone.svg?v=f0f7154f65794f9b2051fadfc69ee079ad7de56507e76987a3885d65d4a22c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
