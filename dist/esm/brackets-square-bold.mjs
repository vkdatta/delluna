export const name="brackets-square-bold";
export const id="dl_6633ab0c3e7c402bb6d3";
export const url=new URL("../icons/brackets-square-bold.svg?v=8d67b156bdabb84e632ca83d708cfed09a6909d9628428bfe5c87ff693f5431c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
