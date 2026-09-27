export const name="arrow-right-duotone";
export const id="dl_84c73ee271e04b0498fd";
export const url=new URL("../icons/arrow-right-duotone.svg?v=d76f689bd18da1a15cc315192252e65a514722ef4d469977bdf81adf453615d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
