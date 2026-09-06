export const name="device-rotate-bold";
export const id="dl_de54e406bd184541b1a6";
export const url=new URL("../icons/device-rotate-bold.svg?v=9aa78911b3f863bd859ef1fb20d9edb89521efd6e19468f03008c3ab8cea2691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
