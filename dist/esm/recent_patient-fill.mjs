export const name="recent_patient-fill";
export const id="dl_c31caf35bb76c641c1cf";
export const url=new URL("../icons/recent_patient-fill.svg?v=dd5b3d5f8d06ff9e414c4d16752aaf4b5191cde7603d9870923f671189afbfb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
