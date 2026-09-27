export const name="flip-vertical-fill";
export const id="dl_c406a92f23ff457e998a";
export const url=new URL("../icons/flip-vertical-fill.svg?v=e3308f892a3538d3dda6ed6a542fefd5b6800e81697e768270ad533923c28e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
