export const name="circles-three-plus-light";
export const id="dl_bf88a26e90374fdaa8be";
export const url=new URL("../icons/circles-three-plus-light.svg?v=cad8ddb857d1b7531909410ce2a3e057c5e5887eed5b3cef952417fdd34df799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
