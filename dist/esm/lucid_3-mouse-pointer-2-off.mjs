export const name="lucid_3-mouse-pointer-2-off";
export const id="dl_de8233360b2b4c34b250";
export const url=new URL("../icons/lucid_3-mouse-pointer-2-off.svg?v=ad7569cb097022a9988ced9694d9744b4a8bdb2b2ac1d05773a8965a9f46eecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
