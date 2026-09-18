export const name="humerus_alt";
export const id="dl_70d0a3752595434e93ff";
export const url=new URL("../icons/humerus_alt.svg?v=9cb8baaece42319f220221045e35b1c4afbabb4ca7a2a255b1724248d95e3baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
