export const name="grid-nine-light";
export const id="dl_723ad0843497428187a1";
export const url=new URL("../icons/grid-nine-light.svg?v=09ba98b18ae2973720809eb75d670832043cd57f119791a0454ea9d64ed1436d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
