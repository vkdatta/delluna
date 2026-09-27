export const name="auto_read_pause-fill";
export const id="dl_cccfa02eb579eb63803d";
export const url=new URL("../icons/auto_read_pause-fill.svg?v=edd1d70c3c998b111a6fa8347079ee6d4adccb5226f681841e6d04ffebaa4b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
