export const name="mouse-simple-fill";
export const id="dl_3ef7ac1e70ff4935ae0c";
export const url=new URL("../icons/mouse-simple-fill.svg?v=1cbd178e83a9daa0813c46f83192bb29970594fffebba4c44bdb59e776660717",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
