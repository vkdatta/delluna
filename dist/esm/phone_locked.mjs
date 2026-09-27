export const name="phone_locked";
export const id="dl_4d2802fd881c0c91ebf3";
export const url=new URL("../icons/phone_locked.svg?v=fa92ff818b879a843738b67653dfd0c6a4ef8d72161bbbf09f25aa4b0abcd7a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
