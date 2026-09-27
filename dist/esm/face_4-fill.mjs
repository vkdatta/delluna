export const name="face_4-fill";
export const id="dl_f258197b1a689c7e28b8";
export const url=new URL("../icons/face_4-fill.svg?v=34f7cfb1dc1a08e3c4094bfc7f533dafe7f02e5e1e93d3f2f9d0d27691deb414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
