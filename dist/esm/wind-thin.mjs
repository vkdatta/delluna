export const name="wind-thin";
export const id="dl_e0d996cca6f84500b1f9";
export const url=new URL("../icons/W/wind-thin.svg?v=d135eb102a46e949e050a4bff59de6f73d62e1c4b46f95ac3d10aa33d078c99e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
