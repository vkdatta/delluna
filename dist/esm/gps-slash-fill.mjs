export const name="gps-slash-fill";
export const id="dl_3e94be810a974778be57";
export const url=new URL("../icons/gps-slash-fill.svg?v=82c46352b84965f6baaceb835514a7fe1e0a7e0273d296897e988bb1bab1bb31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
