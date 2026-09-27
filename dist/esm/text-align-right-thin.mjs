export const name="text-align-right-thin";
export const id="dl_fce1e9e13908f9af93d5";
export const url=new URL("../icons/text-align-right-thin.svg?v=d2a3d9c96d7e77aaa2a7ba9cf19267daa61abd27ae6881859ed3b50b56a9dc26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
