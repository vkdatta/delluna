export const name="apk_document";
export const id="dl_78a4369c4b3c23564f9c";
export const url=new URL("../icons/apk_document.svg?v=ed7c45699a64ea644de626719779882633d67ff8e97e7231bba983528494dc63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
