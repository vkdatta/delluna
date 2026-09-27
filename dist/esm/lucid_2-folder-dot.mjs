export const name="lucid_2-folder-dot";
export const id="dl_e0306f3c2aa24b7c8083";
export const url=new URL("../icons/lucid_2-folder-dot.svg?v=889030be0836b64c671295c100e23bb47377b387c7da66f4423f11f77e731b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
