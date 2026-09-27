export const name="pepper-bold";
export const id="dl_63223b5ab35a40178f24";
export const url=new URL("../icons/pepper-bold.svg?v=b236b1e4ddc63edb671394d418f615772cc67d2f20c12a4edac73a52130165e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
