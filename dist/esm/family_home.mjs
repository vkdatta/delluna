export const name="family_home";
export const id="dl_99354665f57a61818f9a";
export const url=new URL("../icons/family_home.svg?v=f9359d199009eb45371f3ef5e7d21544bb50227f8485db90e1a0fe4e470648f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
