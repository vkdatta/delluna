export const name="arrow-line-down-right-light";
export const id="dl_528d23a61b014d9ab90b";
export const url=new URL("../icons/arrow-line-down-right-light.svg?v=c45e871c191525ac7b917f958407709356f7eed5fd8a6d8afb1c750760e3a098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
