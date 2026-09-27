export const name="google_wifi-fill";
export const id="dl_14f706fa772f57965174";
export const url=new URL("../icons/google_wifi-fill.svg?v=55e1d9da9151dbf8d4bd0da3d7de0b0d32f012592089b1790ac000c8ccec40b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
