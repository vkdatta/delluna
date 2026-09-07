export const name="tabs-light";
export const id="dl_aeec8165aab14db893cd";
export const url=new URL("../icons/T/tabs-light.svg?v=87fe70ec273ce9396a207b24f190069bae78a0e0df06e1d98deea44d8bec829c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
