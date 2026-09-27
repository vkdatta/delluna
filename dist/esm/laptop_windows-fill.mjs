export const name="laptop_windows-fill";
export const id="dl_2391f75aeb4b6e1210ce";
export const url=new URL("../icons/laptop_windows-fill.svg?v=1211c48c6ee011fbea69cc6144ac84e8a16bc51746f507eae27540151d5e6c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
