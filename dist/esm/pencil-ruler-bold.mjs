export const name="pencil-ruler-bold";
export const id="dl_92a6706751474439acc5";
export const url=new URL("../icons/pencil-ruler-bold.svg?v=d30d734b622e039dcd0d69e578a565e419e9702b87ec4ebc534cd0272f289658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
