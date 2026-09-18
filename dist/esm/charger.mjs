export const name="charger";
export const id="dl_1847cc79368440edbe45";
export const url=new URL("../icons/charger.svg?v=4d229b7e77efbf3d727f86bc0063767d03f7ea9dd8b9f11454ba0de4d0e5799a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
