export const name="skip-back-fill";
export const id="dl_a3943b883f6746f5ba8d";
export const url=new URL("../icons/S/skip-back-fill.svg?v=65a2d664196ad28fff7288ed7a1870f508fdb922334ad1a49c54586dae7592d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
