export const name="stack-minus";
export const id="dl_44944f454886b2badf73";
export const url=new URL("../icons/stack-minus.svg?v=27e1b50847219628ccaf10de6de19297b7de8b9a125f2c24aec7444a0143b10a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
