export const name="user-shield";
export const id="dl_5906a117a3074f4fa391";
export const url=new URL("../icons/user-shield.svg?v=62d32811de61eb134757c12a092039d6c183ea7384abbc9c3ce31ee29802ee87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
