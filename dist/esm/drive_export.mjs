export const name="drive_export";
export const id="dl_518bb113fcf94e50a5d1";
export const url=new URL("../icons/drive_export.svg?v=71564fbd992d7f7baad6bdada7a27aa796b62b94a88657f0b5830b0659f26502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
