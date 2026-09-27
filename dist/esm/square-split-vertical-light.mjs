export const name="square-split-vertical-light";
export const id="dl_40319f9b9a562ac92734";
export const url=new URL("../icons/square-split-vertical-light.svg?v=633e2247a8ca0c8a939e047a3575a44c75512f1674c2cb33c45193260f771153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
