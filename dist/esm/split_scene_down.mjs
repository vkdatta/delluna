export const name="split_scene_down";
export const id="dl_3e666065f01041f5a8ad";
export const url=new URL("../icons/S/split_scene_down.svg?v=761626aead253da9d54e1ea15381908c14b393d7e57ddccc19e8784888afc544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
