export const name="eject-light";
export const id="dl_710e9692ada148689cad";
export const url=new URL("../icons/eject-light.svg?v=5b750914d4ebbc4db46377139aaf13308c956adc554a445c50121287b57e0e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
