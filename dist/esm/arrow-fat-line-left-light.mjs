export const name="arrow-fat-line-left-light";
export const id="dl_4bd1c9ad52f943eea14f";
export const url=new URL("../icons/arrow-fat-line-left-light.svg?v=656494cc55555de1ce359b10d6a5869b06e2c1e8ac38d2c252e68bbdd8e998b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
