export const name="seal-percent";
export const id="dl_8b9e5433f67e424294fd";
export const url=new URL("../icons/S/seal-percent.svg?v=f1b4f7a22b505bbb050c1766bba2727769fcbb819f7f31d89348c45e1db23d65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
