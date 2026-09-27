export const name="bridge-light";
export const id="dl_bc5fb4423ee441b99d99";
export const url=new URL("../icons/bridge-light.svg?v=2af5c5f948861bb726ec5e4b67fa87e2cc7fe3c84d115db37b83b3c382abcdc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
