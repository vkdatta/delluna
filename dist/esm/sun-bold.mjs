export const name="sun-bold";
export const id="dl_2625a82d2eaf47bcafd8";
export const url=new URL("../icons/S/sun-bold.svg?v=b1949871cab00cfea93d083ea5c3966b8f9618b5ac408767c6f9b3651805bf2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
