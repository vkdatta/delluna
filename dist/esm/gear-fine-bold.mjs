export const name="gear-fine-bold";
export const id="dl_b83e2876551f4a4484af";
export const url=new URL("../icons/gear-fine-bold.svg?v=de2e2534e4734f45201537dfddf63f4c4afd7d49f24b0409826bb024364b135b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
