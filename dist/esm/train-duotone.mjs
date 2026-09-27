export const name="train-duotone";
export const id="dl_4c0bff49aceb55a358f8";
export const url=new URL("../icons/train-duotone.svg?v=a29072c2bb72e15f7f05327e298cdedacddbcf7dc2b20d9ab11234deae4dd1fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
