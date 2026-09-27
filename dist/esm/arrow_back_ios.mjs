export const name="arrow_back_ios";
export const id="dl_0a23f4597df6956b3b86";
export const url=new URL("../icons/arrow_back_ios.svg?v=9f540f3be9a19064a0a1065c929f8e30c4e2d4da1c14cfdf3d380097d8addb27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
