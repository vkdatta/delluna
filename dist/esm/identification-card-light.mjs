export const name="identification-card-light";
export const id="dl_3bbfca8ea37145828e63";
export const url=new URL("../icons/identification-card-light.svg?v=b4562c9589046755f07aeccb9fb47b3a436ba5de5ab7e894274813550e96d9e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
