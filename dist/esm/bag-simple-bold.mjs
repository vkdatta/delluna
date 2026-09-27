export const name="bag-simple-bold";
export const id="dl_b024864c2204465ab20f";
export const url=new URL("../icons/bag-simple-bold.svg?v=a80b23fa1b7629639e217fc242ccacf844714303cf98e79a0d6dbb38e1a32b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
