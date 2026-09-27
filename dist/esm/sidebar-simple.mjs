export const name="sidebar-simple";
export const id="dl_9aed9c211e6f19b08f7e";
export const url=new URL("../icons/sidebar-simple.svg?v=8f1d412bbfc025f09825a4b1bb6a0094ddc98b4b9a8684eff4f3c29f79d8ddcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
