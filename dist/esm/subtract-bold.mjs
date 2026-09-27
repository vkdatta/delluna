export const name="subtract-bold";
export const id="dl_67d96e5a61ed2cb13a97";
export const url=new URL("../icons/subtract-bold.svg?v=5610d9da27564ed7da0637a023229509bfc5a39f19ef564563aa2937c6d849fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
