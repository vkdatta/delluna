export const name="shape_line";
export const id="dl_1a97eab5f1a4fbae104a";
export const url=new URL("../icons/shape_line.svg?v=de05faadf9f2c302974c9ff50caff0ea74e0764237329bfd3dc44b4bedc64ebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
