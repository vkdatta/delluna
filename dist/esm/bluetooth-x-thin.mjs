export const name="bluetooth-x-thin";
export const id="dl_5178c2c4b9c94d5f9239";
export const url=new URL("../icons/bluetooth-x-thin.svg?v=f2ad4f238283920d37fabfb25ee4ffd09f2df6e49c7c2d22040f3e1bb0ca67a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
