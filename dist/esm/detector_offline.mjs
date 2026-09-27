export const name="detector_offline";
export const id="dl_01095576f9d91f70e5a6";
export const url=new URL("../icons/detector_offline.svg?v=ba44330c438c64516c7d35b04d95f993d4b2237e6c6a7b3436870d13bd61db5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
