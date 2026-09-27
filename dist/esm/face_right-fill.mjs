export const name="face_right-fill";
export const id="dl_1d1593a4ca4e5522f868";
export const url=new URL("../icons/face_right-fill.svg?v=03f25118889d629043a60b85bd721644ea76bcf1f674be6549c5859c8336f3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
