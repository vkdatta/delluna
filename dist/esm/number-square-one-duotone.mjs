export const name="number-square-one-duotone";
export const id="dl_edeae155e0044499a3fb";
export const url=new URL("../icons/number-square-one-duotone.svg?v=276c60b6d9919ca09f84ecf6b96a9daaa6bc032af831d9ce328050cd92e3fe35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
