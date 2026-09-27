export const name="first-aid-kit";
export const id="dl_c7f8fcf0a336445b9b5d";
export const url=new URL("../icons/first-aid-kit.svg?v=dca8954323bab03be40cb60b38a3d4da848b66c253e13bd4089c9711f68884f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
