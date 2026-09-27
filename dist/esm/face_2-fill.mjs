export const name="face_2-fill";
export const id="dl_255e69a197e4279bc9cb";
export const url=new URL("../icons/face_2-fill.svg?v=d43936a63c5c656b7ae3ebd1d2c32fb38f90b45d7fc106100aee9efeb8807f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
