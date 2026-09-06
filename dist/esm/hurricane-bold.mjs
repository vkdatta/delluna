export const name="hurricane-bold";
export const id="dl_be3623ebc3b44bb1ae4a";
export const url=new URL("../icons/hurricane-bold.svg?v=a351ae622960dc5cbbc49d67ccbbcc7655b46f9e23e4f8c47cfd0ec41281e89f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
