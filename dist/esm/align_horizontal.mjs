export const name="align_horizontal";
export const id="dl_5a3bad940617e1531d23";
export const url=new URL("../icons/align_horizontal.svg?v=e6f7a5efad4685f246b288857357a39052a6edf548ed3d341ead95ae17c31747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
