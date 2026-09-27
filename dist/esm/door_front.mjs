export const name="door_front";
export const id="dl_213fd024c7495109b0c0";
export const url=new URL("../icons/door_front.svg?v=a0fe8da3d394b5ac1d05e8a6e90b271e9b67394f883e3d1ab5c2f8b8fe9339a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
