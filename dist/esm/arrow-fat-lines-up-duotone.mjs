export const name="arrow-fat-lines-up-duotone";
export const id="dl_f38e33472d504fc996cf";
export const url=new URL("../icons/arrow-fat-lines-up-duotone.svg?v=2bef79d60258b9c45947048ff232b135f4be18ec5c8af144e9f95217b22eb375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
