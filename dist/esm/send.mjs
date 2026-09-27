export const name="send";
export const id="dl_f9557725534f62cf4a5c";
export const url=new URL("../icons/send.svg?v=57cc5a1e469c9a0ff0fb1d3dfe1ab91908de0293414374fcc2d22aa1d6062eca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
