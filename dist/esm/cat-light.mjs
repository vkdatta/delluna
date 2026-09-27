export const name="cat-light";
export const id="dl_97fa51b4d55f4e81ab62";
export const url=new URL("../icons/cat-light.svg?v=c55d5370ee69f99d7f500db18dfb8615b1fe47a43d998518dc6959815bd971ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
