export const name="user-minus-bold";
export const id="dl_d8ec21a1a6e404b9e049";
export const url=new URL("../icons/user-minus-bold.svg?v=e0df22db9dcbad5b34ea30051eec21c3e7e2d8d8f70657e3f9fc3994cbd7b3eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
