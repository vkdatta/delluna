export const name="map-pin-simple-line-duotone";
export const id="dl_4d0a89d7c19e40beb626";
export const url=new URL("../icons/map-pin-simple-line-duotone.svg?v=1c3695a9032f1ada71af0f0401391a1e1173e7ad0219a8491ca959c5ce637f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
