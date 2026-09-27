export const name="cloud-sun-thin";
export const id="dl_8123491b970844c096d3";
export const url=new URL("../icons/cloud-sun-thin.svg?v=f248471cf80f3e6f26981493de662e9049c835036f63b5ad38cff2e9a2bac2f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
