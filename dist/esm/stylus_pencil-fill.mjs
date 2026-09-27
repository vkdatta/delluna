export const name="stylus_pencil-fill";
export const id="dl_0803f2bec1c7b8a808cd";
export const url=new URL("../icons/stylus_pencil-fill.svg?v=fd714caab87a1066ac3e3c26bb8ad6315479b782bebc7561df45cdf4adc2fb7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
