export const name="file-minus-light";
export const id="dl_2fa480fb26be4894bd87";
export const url=new URL("../icons/file-minus-light.svg?v=c8bc58dcc8aa750026535380f4a7eefbb4116ba8032e041764324d6ccf064b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
