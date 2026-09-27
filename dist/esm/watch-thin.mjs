export const name="watch-thin";
export const id="dl_b3915b758e906ef66d68";
export const url=new URL("../icons/watch-thin.svg?v=dede2283d9727725f874039fbf9d649fda0d8563393bd9d1e0e116b20c851d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
