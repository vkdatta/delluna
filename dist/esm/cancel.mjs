export const name="cancel";
export const id="dl_1b3da75f54393afaa01b";
export const url=new URL("../icons/cancel.svg?v=5356a279930fbcf85285b1d09441376673f922c6f68cd4dcd94ec9b4cd34421f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
