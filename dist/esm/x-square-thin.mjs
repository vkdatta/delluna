export const name="x-square-thin";
export const id="dl_0f7e15f99d36e187087f";
export const url=new URL("../icons/x-square-thin.svg?v=eca364419b69b8c836e8cc24c0f7ed62f86186d50d2757016066876394787cd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
