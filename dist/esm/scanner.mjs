export const name="scanner";
export const id="dl_de80f5ad6f5cbddf0357";
export const url=new URL("../icons/scanner.svg?v=1608f0fe392eb53118206cf47a518790266d88f9f59daa93b75a179e61320a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
