export const name="traffic-sign-bold";
export const id="dl_c848dfe30343fb048be4";
export const url=new URL("../icons/traffic-sign-bold.svg?v=6320d3520d53250744a664486ca3f5a2abe37f7ee8b81e21ee303f76bafb755e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
