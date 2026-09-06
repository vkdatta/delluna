export const name="file-minus-light";
export const id="dl_2fa480fb26be4894bd87";
export const url=new URL("../icons/file-minus-light.svg?v=6ccacbf87c1e37f61b7a9d30e368bd851c624c155bb51a0eac8674a2b78769d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
