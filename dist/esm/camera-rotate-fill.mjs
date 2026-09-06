export const name="camera-rotate-fill";
export const id="dl_bc653e43fc764f3995a8";
export const url=new URL("../icons/camera-rotate-fill.svg?v=4ae415ae66182a66085050aee5d34fef5cc2a6d25aeb8452a8b01916c8cae8df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
