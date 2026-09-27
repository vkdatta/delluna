export const name="lucid_3-panel-top-bottom-dashed";
export const id="dl_f414ff825a9d4b9d8656";
export const url=new URL("../icons/lucid_3-panel-top-bottom-dashed.svg?v=ced4aa6b2b27a98b46e5bc76128d7c260041794f74186b45f580bdfe81c3a8e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
