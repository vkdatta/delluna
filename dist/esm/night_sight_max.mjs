export const name="night_sight_max";
export const id="dl_322f86d6329aecb04ec7";
export const url=new URL("../icons/night_sight_max.svg?v=b89b7b0f61845a06d83dce8cac818923dfc9a97c0e1035e0742a3b474bfa9f50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
