export const name="sunrise";
export const id="dl_b84688133b6c40e39dda";
export const url=new URL("../icons/sunrise.svg?v=546dbcd7cdfcf072c31959000622d71dc0fbac38fec91a46a63e01ac94e99255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
