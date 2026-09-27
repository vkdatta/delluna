export const name="helicopter";
export const id="dl_b7913a139ec67d3f72a3";
export const url=new URL("../icons/helicopter.svg?v=b01805613968953ed07c4f904dff7db66b0daf9b42f769f402586404bfded44a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
