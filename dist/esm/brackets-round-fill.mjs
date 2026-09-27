export const name="brackets-round-fill";
export const id="dl_0a9d90bf8e3d4987927c";
export const url=new URL("../icons/brackets-round-fill.svg?v=4e7e4fd57c53d943434704ba15b770b5abe61be00db14b91a456333bb00400ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
