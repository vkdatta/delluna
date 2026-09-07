export const name="bag-simple-light";
export const id="dl_1aa1f000102b4476b554";
export const url=new URL("../icons/bag-simple-light.svg?v=adef6bc17c6068e999b601641050f6fc829a8b035cb7626ec1ee71b197940423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
