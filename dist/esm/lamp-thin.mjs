export const name="lamp-thin";
export const id="dl_5374a0d9fb974d91a8c1";
export const url=new URL("../icons/lamp-thin.svg?v=26074b51c573e190b3c88792cc0663a102c08d227770fc2562b13b18432fc00e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
