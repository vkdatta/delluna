export const name="caret-circle-up-bold";
export const id="dl_1ff1cff2824949b19b2c";
export const url=new URL("../icons/caret-circle-up-bold.svg?v=109663da02460ee5bc73b2aef5fbdad5ea5bf97f1b3b10421f724e05bfab8aff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
