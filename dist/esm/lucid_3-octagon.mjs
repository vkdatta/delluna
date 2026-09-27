export const name="lucid_3-octagon";
export const id="dl_4f97102569904f4fbdca";
export const url=new URL("../icons/lucid_3-octagon.svg?v=73a2edb1f7782d65ecf443f18ad98ddb53ff06026425fa99b8ad97167d04fcf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
