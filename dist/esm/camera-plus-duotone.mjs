export const name="camera-plus-duotone";
export const id="dl_e3c35b9b416c4cce916a";
export const url=new URL("../icons/camera-plus-duotone.svg?v=e7be9f824bc25a3e24aa0fcaa7cf28de4f5bad2ba28f90272bdf77a6f8af6446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
