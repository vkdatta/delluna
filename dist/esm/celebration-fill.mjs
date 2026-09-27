export const name="celebration-fill";
export const id="dl_bd7ba2b0a910067f8cf7";
export const url=new URL("../icons/celebration-fill.svg?v=93f5710a3a04fe16437b6e0e95d6f32a2ec5cb946fdde9e11859a9e1ec7d50f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
