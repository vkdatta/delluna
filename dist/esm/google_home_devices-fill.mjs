export const name="google_home_devices-fill";
export const id="dl_7c5ebc48cb3dcca79f8b";
export const url=new URL("../icons/google_home_devices-fill.svg?v=fc999b56b648998f91800c77d988d1f08396a1f7eef139d55a39ae01cbf4cce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
