export const name="agriculture";
export const id="dl_8ec7bad76b17f4547e13";
export const url=new URL("../icons/agriculture.svg?v=13684b7b8444edc22b052b4b0f8af98f845a222ea722e893e8fd9c95411cc984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
