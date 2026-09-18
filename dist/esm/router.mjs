export const name="router";
export const id="dl_d7d6e0fcb362404c9a8d";
export const url=new URL("../icons/router.svg?v=8668fcc9d31929c1e743ca4012b9b60548cf0c2c8e8cc09b8935912e1be607e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
