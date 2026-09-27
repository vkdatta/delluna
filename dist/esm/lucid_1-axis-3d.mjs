export const name="lucid_1-axis-3d";
export const id="dl_f0caa143472a4e949420";
export const url=new URL("../icons/lucid_1-axis-3d.svg?v=9f320199b367ae3dbcfd19a7fdd3568d30d77e1d2b468548c28e56a163214f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
