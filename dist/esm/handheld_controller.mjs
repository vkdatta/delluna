export const name="handheld_controller";
export const id="dl_a4708a610e6c5d29b697";
export const url=new URL("../icons/handheld_controller.svg?v=27ad025c3c2afe2469f31316cf1842cc87dff7485ad9d6bc6786314554926620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
