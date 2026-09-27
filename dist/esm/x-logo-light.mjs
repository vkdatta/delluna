export const name="x-logo-light";
export const id="dl_afed8a7b1453a1fd265f";
export const url=new URL("../icons/x-logo-light.svg?v=f7651fdd3ba6cae994ff8d2fa8e4281bafaec6ddc1dd590584b4cff7f0ce3c27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
