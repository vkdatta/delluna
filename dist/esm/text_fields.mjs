export const name="text_fields";
export const id="dl_948b3b2c74c2ebf1f866";
export const url=new URL("../icons/text_fields.svg?v=5cb55547a661fec44761cef07daea25798d2188622d3622ffb51fc7cbd67e7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
