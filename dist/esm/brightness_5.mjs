export const name="brightness_5";
export const id="dl_43c88c830c8ee685e075";
export const url=new URL("../icons/brightness_5.svg?v=2de2288483620c94074705f807c6885bd96f7604b5070cd72a7120cfdbb82234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
