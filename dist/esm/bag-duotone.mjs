export const name="bag-duotone";
export const id="dl_2bc794d046b34279827d";
export const url=new URL("../icons/bag-duotone.svg?v=b4919c0e95a74634b9fcd586d7892c301656bec046f56af955cc921a0e1f4b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
