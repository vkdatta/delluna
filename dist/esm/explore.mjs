export const name="explore";
export const id="dl_ffced972e773444e9090";
export const url=new URL("../icons/explore.svg?v=e900ec6824b3ad201a7ff0aec0f82cc3b0e10a1c6967d2312b99c54b9b9c6233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
