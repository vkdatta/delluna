export const name="width_wide";
export const id="dl_f392d2752f293f0c8343";
export const url=new URL("../icons/width_wide.svg?v=3ac40c98214e693ada160621b0884748a75cf7b23f12d1656faa39e65640b4b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
