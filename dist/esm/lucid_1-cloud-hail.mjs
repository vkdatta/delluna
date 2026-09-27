export const name="lucid_1-cloud-hail";
export const id="dl_6851e679f0804bccb1bd";
export const url=new URL("../icons/lucid_1-cloud-hail.svg?v=044f2964444c83dbc74b7db19c53c77055a3cd36c1b3bc85ebef65d4ee4222cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
