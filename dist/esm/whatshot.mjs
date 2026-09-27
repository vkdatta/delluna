export const name="whatshot";
export const id="dl_a220d91186824ccab21d";
export const url=new URL("../icons/whatshot.svg?v=1d32a2cccd1d06ef61701c58e4718879ee3c54a093dad9ed8d8f4aa950fe676d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
