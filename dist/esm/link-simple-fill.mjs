export const name="link-simple-fill";
export const id="dl_d4b8c2d7071b45f7834c";
export const url=new URL("../icons/link-simple-fill.svg?v=ac1b6320e0b44d8e4ba0127fe5bffc31ae7df4e3cefe40089a0329cc417b5094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
