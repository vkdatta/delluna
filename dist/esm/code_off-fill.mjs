export const name="code_off-fill";
export const id="dl_5c78352ae026793072f0";
export const url=new URL("../icons/code_off-fill.svg?v=4868a149c47efb177adcf03215845b9d058cbb07e13fd1dafcf86d112d19eeea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
