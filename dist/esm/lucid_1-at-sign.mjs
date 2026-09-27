export const name="lucid_1-at-sign";
export const id="dl_0ab3d86b7d9b4603aea2";
export const url=new URL("../icons/lucid_1-at-sign.svg?v=65f0c3c9ee77231a0e76fadb84eab8ac46ef3f1a710670ce1254985319afc1ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
