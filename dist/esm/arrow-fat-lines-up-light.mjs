export const name="arrow-fat-lines-up-light";
export const id="dl_4aae584ff1864c87a99e";
export const url=new URL("../icons/arrow-fat-lines-up-light.svg?v=5eb731d4523641f753dd29881abb74371ae3737464a9819185ddc323ce9c2ed0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
