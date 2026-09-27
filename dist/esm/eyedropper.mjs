export const name="eyedropper";
export const id="dl_daedf63268f04fe29ce5";
export const url=new URL("../icons/eyedropper.svg?v=1cc234e6cc56aa58773f7c639313d312872e8db1f602adc463fb4557991fa4c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
