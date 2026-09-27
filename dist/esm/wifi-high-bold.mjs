export const name="wifi-high-bold";
export const id="dl_01bcc82549b58f2de828";
export const url=new URL("../icons/wifi-high-bold.svg?v=2714844a6df8a8308936314155aa8abfbd338fad137e58ca63b4865feb9c636a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
