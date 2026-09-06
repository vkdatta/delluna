export const name="credit-card-fill";
export const id="dl_fc0e340ac73a4eb4b4de";
export const url=new URL("../icons/credit-card-fill.svg?v=65f1fb499538f5743e257c6788afc61ae16af5ec0f405eac2cf5d9bf9b93b768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
