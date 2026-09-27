export const name="tree-evergreen-bold";
export const id="dl_8a2793c7843dd96bba59";
export const url=new URL("../icons/tree-evergreen-bold.svg?v=57bad4ef5a0ba9c50d308863e1c0d3175be44e59c982b7fc25df5e355d5c413a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
