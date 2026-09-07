export const name="money-thin";
export const id="dl_ca27e4eac7c642d6b45f";
export const url=new URL("../icons/money-thin.svg?v=3dd4e3657e32a0ea352826346dff33347ccba0be1ddfcf193c89df00c2f6dbe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
