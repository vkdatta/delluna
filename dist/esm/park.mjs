export const name="park";
export const id="dl_70d49a6fbd6b4461a13c";
export const url=new URL("../icons/park.svg?v=d4255635d39c71c66452cccc256957fe28e0dbf7cd7ac346c987c30751a3972a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
