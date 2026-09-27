export const name="sidebar";
export const id="dl_f8e5bd53ae88c37293d8";
export const url=new URL("../icons/sidebar.svg?v=1b23b06d06127fc4a8151ceac58f87dce9a899943065992ed0fa278f56af7d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
