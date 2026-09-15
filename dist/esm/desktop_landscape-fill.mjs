export const name="desktop_landscape-fill";
export const id="dl_f5a3d1be9c474a21a669";
export const url=new URL("../icons/D/desktop_landscape-fill.svg?v=b480d4e572043d25cc3bab8c3ebac7591173e3379d9a9ba46b4822fa731eea51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
