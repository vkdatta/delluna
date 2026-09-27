export const name="navigation-arrow-duotone";
export const id="dl_f9f87265098e458b9cdb";
export const url=new URL("../icons/navigation-arrow-duotone.svg?v=9929e98e36cbb38902761946b84591c53a0839ab8ff8fbb596dc011aa5e1c7b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
