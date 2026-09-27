export const name="ranking-thin";
export const id="dl_92f00396846c40aab3a4";
export const url=new URL("../icons/ranking-thin.svg?v=e88eaf4a24cf25410ffff036304302c6f5f6056bc2f1d86b5d517e83fdc616e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
