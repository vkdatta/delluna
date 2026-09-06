export const name="keyboard-bold";
export const id="dl_cc9a3271779946eaa18c";
export const url=new URL("../icons/keyboard-bold.svg?v=54b30973b62402f0e56e9ae41bd8ba08d771e643dbc4699de5f858b801e7bd4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
