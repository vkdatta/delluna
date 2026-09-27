export const name="text-b-fill";
export const id="dl_eff368955f3244b93aff";
export const url=new URL("../icons/text-b-fill.svg?v=bf94aad83c4bf9870a37727f50bb608691f361fe9489cfdff2ca9e10d57fca27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
