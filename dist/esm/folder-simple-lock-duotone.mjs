export const name="folder-simple-lock-duotone";
export const id="dl_87b61e0ce152487a85fd";
export const url=new URL("../icons/folder-simple-lock-duotone.svg?v=530084904caf640742e86ac70fa3588ec1a9bf692d209b3efdd495ef662c5388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
