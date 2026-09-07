export const name="park-duotone";
export const id="dl_8ddafb2ddc9444eead1c";
export const url=new URL("../icons/park-duotone.svg?v=72c0a785303720e208dbe6d01b5e053efcac5a66b2a6e2f13b57cb07cc2ebed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
