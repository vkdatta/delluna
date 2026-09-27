export const name="toy-brick";
export const id="dl_0e93b81aa2584d6a9e00";
export const url=new URL("../icons/toy-brick.svg?v=cad4af5d2e96a6724609254988ddab0c8ae9a8071651ec16e0d45babf06d340f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
