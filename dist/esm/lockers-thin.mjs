export const name="lockers-thin";
export const id="dl_fa7d6a9655f34f73be55";
export const url=new URL("../icons/lockers-thin.svg?v=399f12376864c2b4a6c837522022532496f5db9885d9a1071fbeac1cdce346b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
