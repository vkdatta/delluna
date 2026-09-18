export const name="photo_library";
export const id="dl_9f90beb6e8554391a2fe";
export const url=new URL("../icons/P/photo_library.svg?v=1c6ee47f46b0b8f8d575e8f2e75a4128b81db19bda1348efa01d4e2d21444f72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
