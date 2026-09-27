export const name="view_sidebar-fill";
export const id="dl_4ec6238dcb8b4c37a025";
export const url=new URL("../icons/view_sidebar-fill.svg?v=585dad0e78a9450d37722d4337e95934b530cc116ec7b124061d2d6585f65c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
