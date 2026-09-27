export const name="plant-thin";
export const id="dl_a665cc333ccc4b27b148";
export const url=new URL("../icons/plant-thin.svg?v=f9eccffd41d4246d847456b235bc66b393518dcd9c3e72505aee94d501b6538a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
