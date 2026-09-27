export const name="swatches";
export const id="dl_8b1751f62fc25d304de6";
export const url=new URL("../icons/swatches.svg?v=714d73320531cbd8bb15622678ebbed3bda444d81fbbec4de50dd94b8030a0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
