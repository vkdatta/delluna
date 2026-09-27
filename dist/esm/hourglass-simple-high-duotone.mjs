export const name="hourglass-simple-high-duotone";
export const id="dl_cb5d7434857840fca53a";
export const url=new URL("../icons/hourglass-simple-high-duotone.svg?v=846d59c836eec6a321e9900f73d1daac32bb4eb80597f7f57e3c276ccc2e33b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
