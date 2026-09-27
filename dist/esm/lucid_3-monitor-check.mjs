export const name="lucid_3-monitor-check";
export const id="dl_137a265fdf0947c7b059";
export const url=new URL("../icons/lucid_3-monitor-check.svg?v=8eb301e054afb195c92185caaff0c631ba7158ce0716d934f6fc8e78eaba7348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
