export const name="battery-vertical-high-bold";
export const id="dl_c072bf757dcb481c9e0d";
export const url=new URL("../icons/battery-vertical-high-bold.svg?v=ef625805800adb260bee95de10642f1bdec874fb1ba105901bc3d8b169664cb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
