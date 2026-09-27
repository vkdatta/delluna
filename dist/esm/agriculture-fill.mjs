export const name="agriculture-fill";
export const id="dl_eaf36faeaede16f324a5";
export const url=new URL("../icons/agriculture-fill.svg?v=66ee8766ecb8006ea69758d3fa208f3128ee75f93cde06a06b9da8c54823e713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
