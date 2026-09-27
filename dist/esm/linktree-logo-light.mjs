export const name="linktree-logo-light";
export const id="dl_a0ca94d2ac58462da74d";
export const url=new URL("../icons/linktree-logo-light.svg?v=e5c24d969531c27293d5710a845e43842eb0ec255212004217406e429b0140a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
