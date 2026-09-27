export const name="description-fill";
export const id="dl_be4c0c34f48e562cba9d";
export const url=new URL("../icons/description-fill.svg?v=8e0caaa93b3bf954d178a453bbfb25d13ce1225a491a3f0d0805436d12d8fa7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
