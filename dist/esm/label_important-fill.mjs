export const name="label_important-fill";
export const id="dl_f523d575bd364b45b843";
export const url=new URL("../icons/L/label_important-fill.svg?v=f3f8899cf7fdc6b5c91c939c8e4994da92f00d5a3b1cc9c6a6674ce39054029c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
