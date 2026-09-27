export const name="ranking-thin";
export const id="dl_92f00396846c40aab3a4";
export const url=new URL("../icons/ranking-thin.svg?v=af107a90237da232d0093a09149d00104c9462ba1837b6d2a515908210aa5ccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
