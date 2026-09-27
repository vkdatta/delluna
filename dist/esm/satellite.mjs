export const name="satellite";
export const id="dl_1e3b5c8da41258688d54";
export const url=new URL("../icons/satellite.svg?v=2b2e4d44dbe0e9b52c23cfa1e2ecdd4f7afbe94c4f5c5c1effd67ee63f06a788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
