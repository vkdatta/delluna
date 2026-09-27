export const name="scanner";
export const id="dl_97eb9f309cffbad7abaa";
export const url=new URL("../icons/scanner.svg?v=bf9f19c14f5d2824a118c26e96bb3e9af3ab36ed8b285ba4812e5ed83d6569f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
