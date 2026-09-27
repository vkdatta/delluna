export const name="microsoft-powerpoint-logo-fill";
export const id="dl_587ee1ce544d4850a304";
export const url=new URL("../icons/microsoft-powerpoint-logo-fill.svg?v=814900e06e8ea2194d1df285ce4cf1d2262674726e08cca0b56c4ba557cf0d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
