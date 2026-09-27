export const name="face_6-fill";
export const id="dl_0a7c9125e746b75fb7de";
export const url=new URL("../icons/face_6-fill.svg?v=0a20ce48e2beadf19b896a37dd9eaa492a72c5724ec1b1b2300c83298383ede4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
