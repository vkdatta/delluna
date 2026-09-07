export const name="users-four-fill";
export const id="dl_63b918f93a624a63af16";
export const url=new URL("../icons/U/users-four-fill.svg?v=6a3176eb4c4ae8fe160d049c353d27223370b8af559732d55eadafc73cc472a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
