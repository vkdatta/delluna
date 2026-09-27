export const name="water_ec";
export const id="dl_89fca472b410b53ac4f6";
export const url=new URL("../icons/water_ec.svg?v=d7dcf480f0f1347bd76e93f250dfdf3823ff7f37435ecaf6b5e4a633f19564d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
