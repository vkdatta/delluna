export const name="install_desktop-fill";
export const id="dl_fadd114d441df9504e6d";
export const url=new URL("../icons/install_desktop-fill.svg?v=23aecc698a0a2bf6f4f7629a918001f671bbe2d8aef3222ab74b1603e103ad88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
