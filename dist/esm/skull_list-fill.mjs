export const name="skull_list-fill";
export const id="dl_0e8d151ed36c45cd889a";
export const url=new URL("../icons/S/skull_list-fill.svg?v=9326109615105ec584b24d816a930b9685eb6b0a4a080ae4c0a00ce99784b915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
