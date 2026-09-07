export const name="user-minus-fill";
export const id="dl_13bddd9f308a4d5998fb";
export const url=new URL("../icons/U/user-minus-fill.svg?v=2ed888f2c19b2f6c6d23f660678bb5cfbf0325ab2522df0dce57b72644b3ea9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
