export const name="nest_hello_doorbell";
export const id="dl_b74fa7a8cef359478ebe";
export const url=new URL("../icons/nest_hello_doorbell.svg?v=a9dd7544cfc29002c71926f8912f057e9f90dbbd837b0d3c7108f673846eb70b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
