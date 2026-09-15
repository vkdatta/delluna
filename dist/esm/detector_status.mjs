export const name="detector_status";
export const id="dl_565a52205e7245fd9720";
export const url=new URL("../icons/D/detector_status.svg?v=6e9242616afc8b08f5b460ab3061687c41c219c85e75a1febcbb2f4a76776c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
