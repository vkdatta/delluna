export const name="eject-simple-light";
export const id="dl_b4854bd94cb8448c8e1c";
export const url=new URL("../icons/eject-simple-light.svg?v=94da70e4ac4df4fd4625d6b765262ab089d9daedfce03c62a4a21cbd7bd5cb5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
