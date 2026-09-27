export const name="orthopedics-fill";
export const id="dl_66cffc3a1123d92f0782";
export const url=new URL("../icons/orthopedics-fill.svg?v=33f69e26497fca327f8636ccaddf92513c937f3a267b261056b0111417948911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
