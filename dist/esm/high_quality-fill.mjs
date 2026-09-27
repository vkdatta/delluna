export const name="high_quality-fill";
export const id="dl_ff7026caa0d35dd75b56";
export const url=new URL("../icons/high_quality-fill.svg?v=c26a1d8b8231a2f1a411258d555ee0f10c5bc8e0091a9bfa0ef9d85a4a6f4239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
