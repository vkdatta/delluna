export const name="seal-question-light";
export const id="dl_20975e2120e106348c81";
export const url=new URL("../icons/seal-question-light.svg?v=f379a1a06751d18b18287d827f4cf1052e7a0e325dd8323cd38d02db2667c6c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
