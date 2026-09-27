export const name="fork-knife-bold";
export const id="dl_4a98f5941e5548748a50";
export const url=new URL("../icons/fork-knife-bold.svg?v=4c2a26d740a80039233c52917bdd6c1e9a85b3de5cab2b33f4814a1294a0bb46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
