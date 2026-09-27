export const name="face_4";
export const id="dl_83393715f319c6928790";
export const url=new URL("../icons/face_4.svg?v=1133dacec6f551d4a4fa372d1858fa95ec1508143bf44f3774c88e7ba64c029b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
