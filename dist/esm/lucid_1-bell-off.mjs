export const name="lucid_1-bell-off";
export const id="dl_3dee5997347f422b8180";
export const url=new URL("../icons/lucid_1-bell-off.svg?v=bf434f2a9750ddc5d67f478673620d7721635fc2e2eb3390f5466a18231c1d57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
