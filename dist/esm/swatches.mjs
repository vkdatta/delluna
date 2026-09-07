export const name="swatches";
export const id="dl_0cc1b59b8cfe42e795cc";
export const url=new URL("../icons/S/swatches.svg?v=714d73320531cbd8bb15622678ebbed3bda444d81fbbec4de50dd94b8030a0fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
