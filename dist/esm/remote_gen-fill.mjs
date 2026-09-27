export const name="remote_gen-fill";
export const id="dl_41e90e7f9fd213046895";
export const url=new URL("../icons/remote_gen-fill.svg?v=445ee2ab51d7610cfa99d297c017b43e3daf71cd74a82cd5dbf6099a3924ebd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
