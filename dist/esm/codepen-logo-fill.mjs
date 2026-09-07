export const name="codepen-logo-fill";
export const id="dl_f9555d8e5ff142a9823d";
export const url=new URL("../icons/codepen-logo-fill.svg?v=c815a0f1e4f1fbcd352ac33f025c300b19a5e769f3d6737d78955097d9b77aa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
