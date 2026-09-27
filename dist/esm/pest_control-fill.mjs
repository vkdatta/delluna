export const name="pest_control-fill";
export const id="dl_bf6ad4f72de7116eb25c";
export const url=new URL("../icons/pest_control-fill.svg?v=6116eecaedd03425fca8617e8f7bdeccac13cf2c367cd42e5caa13edf6636a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
