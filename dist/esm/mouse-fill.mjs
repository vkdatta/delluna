export const name="mouse-fill";
export const id="dl_94d35b8cc377429b8e7e";
export const url=new URL("../icons/mouse-fill.svg?v=db565078b2a0fb561e3b8c94e2443a7cd45a32886c81b646a8c406a4b475b33a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
