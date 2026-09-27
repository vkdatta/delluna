export const name="view_comfy";
export const id="dl_9ca3aaeadc8ad74e9fa9";
export const url=new URL("../icons/view_comfy.svg?v=37c3e7498f054ff17048ca50d692183de18500acd6ebc2f2d182a140eacf4b95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
