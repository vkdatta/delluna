export const name="format_h5-fill";
export const id="dl_9e2e1d5e328f56ebe431";
export const url=new URL("../icons/format_h5-fill.svg?v=881c5e20e50ba830a29a1958a602d45d961fdfbc11636fec0a587ac15e891532",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
