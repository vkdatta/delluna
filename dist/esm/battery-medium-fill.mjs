export const name="battery-medium-fill";
export const id="dl_10a9c8e2a2cc409fb401";
export const url=new URL("../icons/battery-medium-fill.svg?v=1a2f5be135940d511776fc0186230f5d9a1cec6ebb7b156b0774db0c11ee259a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
