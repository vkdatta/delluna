export const name="dresser-duotone";
export const id="dl_8829e158154546baadcf";
export const url=new URL("../icons/dresser-duotone.svg?v=adbc31e6b22b6c511149ffaea8cb0df0e95773ef28dc788fc0507df504a43a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
