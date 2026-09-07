export const name="train-simple-bold";
export const id="dl_faf1fa0e4d6841b6a203";
export const url=new URL("../icons/T/train-simple-bold.svg?v=ea94714a0b571bbdda6cd4ecb9fface9ac13bf8fe3f404c2f350e7cad818b5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
