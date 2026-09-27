export const name="battery-full";
export const id="dl_a64845c7d1194b2e9c3e";
export const url=new URL("../icons/battery-full.svg?v=abdf909341c29161dd768bade3325d70a9baabc669ff783a8c22e9c20f075855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
