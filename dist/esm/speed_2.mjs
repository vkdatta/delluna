export const name="speed_2";
export const id="dl_67353d2c7827f2db70e2";
export const url=new URL("../icons/speed_2.svg?v=478dc8a23c317ca2fd1398e19354f8ecbe9f9c623051f35c31149e6ad680994c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
