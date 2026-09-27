export const name="add_home_work";
export const id="dl_f1624fb56ef9e6241159";
export const url=new URL("../icons/add_home_work.svg?v=1f6161bec63fe29bc2fbb145072097cff489f9d79fd8ba1c8959ee3cba6fef76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
