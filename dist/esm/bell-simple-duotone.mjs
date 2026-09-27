export const name="bell-simple-duotone";
export const id="dl_f92b69dd26154e4d9928";
export const url=new URL("../icons/bell-simple-duotone.svg?v=b1eb46173829e00a56e9eb588a87738a288c9cc7ffd136b10345bf8fd9e886eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
