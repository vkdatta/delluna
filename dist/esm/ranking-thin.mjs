export const name="ranking-thin";
export const id="dl_92f00396846c40aab3a4";
export const url=new URL("../icons/ranking-thin.svg?v=83f47c712cf39916f2b761961225ccdb1c2e00ec80a2ed5286959d0abdeedc1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
