export const name="medal-duotone";
export const id="dl_464ca69a2b7e47fbab81";
export const url=new URL("../icons/medal-duotone.svg?v=f3a05f01e3ca8d2de946b4651a350f634fb100d0953b096d3eb2cf15c70b6c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
