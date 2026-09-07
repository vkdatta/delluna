export const name="lucid_2-heading-5";
export const id="dl_b084ac4a5e5b4c259dcc";
export const url=new URL("../icons/lucid_2-heading-5.svg?v=a31c28d820999daa3d0c87b1f360d45dd4d2fa64ef74d7faac6f5eecdaca0928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
