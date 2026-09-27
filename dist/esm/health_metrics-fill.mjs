export const name="health_metrics-fill";
export const id="dl_851ae942b8020b5aa2f9";
export const url=new URL("../icons/health_metrics-fill.svg?v=536bd31da4b569cdf01cd71d5add427993fe6d843ab01abdac3fb6dacb476b75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
