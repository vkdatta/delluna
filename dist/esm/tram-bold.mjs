export const name="tram-bold";
export const id="dl_0a00dfb58daa438e62fc";
export const url=new URL("../icons/tram-bold.svg?v=dfc6ef6b78e8037fc8b63dcdd0767416f3129dbe18476a681754b98b58ee4397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
