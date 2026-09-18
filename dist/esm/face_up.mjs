export const name="face_up";
export const id="dl_eb567eccd8ff406fa8ba";
export const url=new URL("../icons/face_up.svg?v=2b41f0bbe6a7132e54d522a3eb9de499f857bb9e352a76fa0c677c5b5c6def7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
