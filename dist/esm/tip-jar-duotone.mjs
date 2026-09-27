export const name="tip-jar-duotone";
export const id="dl_b3099bd142776119e8a3";
export const url=new URL("../icons/tip-jar-duotone.svg?v=54f68e4f5afd79c006f6833fe90852682552e01c79db82b0c95e7dba1a1ae208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
