export const name="triangle-right";
export const id="dl_63793fbbcb3546d4bcaa";
export const url=new URL("../icons/triangle-right.svg?v=c9cb78193a9edb1c48716689fd7b8ccfc434e539ef2f993ee4262cc8aa93d64f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
