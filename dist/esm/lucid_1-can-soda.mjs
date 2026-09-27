export const name="lucid_1-can-soda";
export const id="dl_3d3baf4b012f4c678697";
export const url=new URL("../icons/lucid_1-can-soda.svg?v=e3afeca55796c34e1b05382512fa34bfad3ae8723a70a3589ea181cdb8083cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
