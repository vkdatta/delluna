export const name="terminal_add-fill";
export const id="dl_d315ff32abda45129d68";
export const url=new URL("../icons/terminal_add-fill.svg?v=0016f7751dd26f98954c477b4abe7c86f04d63636a8cafd3776ef98f6896e463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
