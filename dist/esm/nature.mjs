export const name="nature";
export const id="dl_5eca6f481041574669b3";
export const url=new URL("../icons/nature.svg?v=407c8043923c34265c3599c65092456d736d68d976642f20d0a69b1f892a67d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
