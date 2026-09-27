export const name="lucid_3-map-plus";
export const id="dl_711b4c2343354e569e19";
export const url=new URL("../icons/lucid_3-map-plus.svg?v=c7433c66d4cff04815c1e665c67af1dae324129aa3cd94eb3cc3fa7c407b5cb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
