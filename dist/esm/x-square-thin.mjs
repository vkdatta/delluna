export const name="x-square-thin";
export const id="dl_ee0f3be140184c04b9e5";
export const url=new URL("../icons/X/x-square-thin.svg?v=eca364419b69b8c836e8cc24c0f7ed62f86186d50d2757016066876394787cd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
