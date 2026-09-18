export const name="line_curve";
export const id="dl_b78294568f3a4587a2df";
export const url=new URL("../icons/L/line_curve.svg?v=50cc45e0218c489d462cc16755d55658f37999d77dc2533e8cad59c0d3dca16a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
