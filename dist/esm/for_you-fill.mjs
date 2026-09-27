export const name="for_you-fill";
export const id="dl_2bcf423926a1944389d6";
export const url=new URL("../icons/for_you-fill.svg?v=e6676a647fd6c503f8caa20faa8e74095ec3ec297bb1eb7bbf1010f88f3bec7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
