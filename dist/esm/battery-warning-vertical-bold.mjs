export const name="battery-warning-vertical-bold";
export const id="dl_eb7f708b91174a81b84b";
export const url=new URL("../icons/battery-warning-vertical-bold.svg?v=4b31dfcca63b9d43c045760c7558d59837e91f6a58aa2d78df21b447563ca36e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
