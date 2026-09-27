export const name="browser-fill";
export const id="dl_73774f14855440fca7a1";
export const url=new URL("../icons/browser-fill.svg?v=8eb57c36ce85525642594be1bcadafb8ae90091a0513c656695cad56f6f118d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
