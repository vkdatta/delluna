export const name="qr-code-thin";
export const id="dl_305f9330ae284a3d8054";
export const url=new URL("../icons/qr-code-thin.svg?v=e54edff0e79fa042f07179315b52bda98ebfdbd23b1dd114503ff33cef954eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
