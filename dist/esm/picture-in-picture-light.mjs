export const name="picture-in-picture-light";
export const id="dl_c2abe6624fb241f6af20";
export const url=new URL("../icons/picture-in-picture-light.svg?v=758d0fa33b387319f97bbc0b50938d7ca5f83ad6c1da86f7b4379697b9a85aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
