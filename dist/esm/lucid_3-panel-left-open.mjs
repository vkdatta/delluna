export const name="lucid_3-panel-left-open";
export const id="dl_74e3a13a1eba46e78e2f";
export const url=new URL("../icons/lucid_3-panel-left-open.svg?v=7ea98413402645fe95fc6cd8f4701f28fc8e63a939ffee8c85fd129eb98141fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
