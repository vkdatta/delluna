export const name="circles-three-thin";
export const id="dl_8d35d9e7ab7d4415b5c1";
export const url=new URL("../icons/circles-three-thin.svg?v=b4c031203c1f06a72e3c8aab52a30892ecbc7cd08f4ef9c99f90f610db10ab3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
