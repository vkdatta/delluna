export const name="wifi-medium-bold";
export const id="dl_b46ac89ea7e041dbb51e";
export const url=new URL("../icons/W/wifi-medium-bold.svg?v=ffd0bb7ea5ea6952db76d3367af396c75fb3da729d8975b32d01e259db05a808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
