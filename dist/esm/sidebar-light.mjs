export const name="sidebar-light";
export const id="dl_3b2773220bd7c46c21b2";
export const url=new URL("../icons/sidebar-light.svg?v=90c0bcc20b7c3d8673f189d40874dda7ebbff824f44daa6e21e1fc01d498000d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
