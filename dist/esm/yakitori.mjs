export const name="yakitori";
export const id="dl_6426fa1c19f9f0fa5c13";
export const url=new URL("../icons/yakitori.svg?v=68ecafd6a954de8a13344edf87a81487ca3957be4c5088b31fd9cece44b42ab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
