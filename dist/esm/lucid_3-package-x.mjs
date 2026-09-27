export const name="lucid_3-package-x";
export const id="dl_92582cd8d718479c98bb";
export const url=new URL("../icons/lucid_3-package-x.svg?v=869c253da468bbe232ba0f66de0a89cbe072f76ee8cec637606e8466717425ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
