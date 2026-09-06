export const name="computer-tower-thin";
export const id="dl_e95945d90df44341ba1d";
export const url=new URL("../icons/computer-tower-thin.svg?v=d3873b3dc9e7e1f9528d782503298273dc4aa9bb7aa442acc6a4f708f91ac50a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
