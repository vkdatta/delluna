export const name="basketball";
export const id="dl_c1c8a9a3b0264b5a93f1";
export const url=new URL("../icons/basketball.svg?v=4c9f35ee04c2576ab57068c1c45625c6ee5e194cc9b5a5b9fc36b12b1fa7400e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
