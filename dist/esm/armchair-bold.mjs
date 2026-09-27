export const name="armchair-bold";
export const id="dl_3892788a1fec40cda3c8";
export const url=new URL("../icons/armchair-bold.svg?v=a100bc30d9a79caa0cd048ab5514f58a88281037e1fb369c3488e7924b3b3c12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
