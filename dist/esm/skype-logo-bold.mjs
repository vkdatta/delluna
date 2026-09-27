export const name="skype-logo-bold";
export const id="dl_1e71ad37d7cad953344e";
export const url=new URL("../icons/skype-logo-bold.svg?v=67ba314fa8f141d04f76b998177a99cf0d1c10e64e006f992d5708fc67a63f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
