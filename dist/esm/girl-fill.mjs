export const name="girl-fill";
export const id="dl_e801c757065ff6d10561";
export const url=new URL("../icons/girl-fill.svg?v=4346a3bcb2844380a7573e39b136064d2b6c7ad213d9dd36e670990b01c90e2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
