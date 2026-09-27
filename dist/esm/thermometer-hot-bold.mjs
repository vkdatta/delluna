export const name="thermometer-hot-bold";
export const id="dl_a5ba9e6287f0027bddce";
export const url=new URL("../icons/thermometer-hot-bold.svg?v=bc614513e59b7a2b356b02378c794f8bcda0a4a3bab5206b1fb4b904e7b55977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
