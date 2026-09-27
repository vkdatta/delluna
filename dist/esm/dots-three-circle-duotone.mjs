export const name="dots-three-circle-duotone";
export const id="dl_b4d10c643b6a4b389dbc";
export const url=new URL("../icons/dots-three-circle-duotone.svg?v=f09a87e32e76f7df10709eae77e3f655483e212612453f79dc3d2e1a7313e8a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
