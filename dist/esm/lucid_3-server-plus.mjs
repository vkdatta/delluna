export const name="lucid_3-server-plus";
export const id="dl_c9b130d490584801b158";
export const url=new URL("../icons/lucid_3-server-plus.svg?v=85758d1a8c59fc39ad351724aa80bae9dcfdef091047fec0f48e3546c140723c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
