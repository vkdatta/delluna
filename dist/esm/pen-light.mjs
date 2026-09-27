export const name="pen-light";
export const id="dl_f666ca0fa3324227ad96";
export const url=new URL("../icons/pen-light.svg?v=6e979d292bb39610bbadf6933a4ccda337e1cbc0eb2536c7cb1dcbb387225979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
