export const name="50mp-fill";
export const id="dl_dcbd09c0aa79485caddf";
export const url=new URL("../icons/50mp-fill.svg?v=d456960614a790e0fe095fc9da2d38a17e557f31ca2a5df059e29fe4b6e3325e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
