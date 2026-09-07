export const name="tray-arrow-down-bold";
export const id="dl_5723397568b84506886b";
export const url=new URL("../icons/T/tray-arrow-down-bold.svg?v=3ed2c27d885d7f779d2ac9e7e0e9777217e073061be684887dd66bd957e2110d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
