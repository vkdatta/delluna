export const name="tab_inactive";
export const id="dl_d1db2a73915cb390f8b9";
export const url=new URL("../icons/tab_inactive.svg?v=50e3411bfd97df685a4c56e9a18d98dfba0fadb3d640e2df6d4f126b6e19a9ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
