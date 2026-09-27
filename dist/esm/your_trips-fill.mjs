export const name="your_trips-fill";
export const id="dl_6e55a8661f4f73f84aec";
export const url=new URL("../icons/your_trips-fill.svg?v=b355247d82a2b7b5e958af53cc8a3d032571921c67ed3eb2a02295e1950f7905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
