export const name="list-star-light";
export const id="dl_de1acdc3d1184e41a4c4";
export const url=new URL("../icons/list-star-light.svg?v=4a44640d62949969c17916b1c48ae05c2a26967803583bf6e43a5cab14927259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
